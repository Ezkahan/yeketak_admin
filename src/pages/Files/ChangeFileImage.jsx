import api from "common/config/api.service";
import humanFileSize from "common/helpers/filesize";
import FileLoader from "components/Loader/FileLoader";
import { useState } from "react";

const ChangeFileImage = ({ slug, close }) => {
  const [progress, setProgress] = useState(0);
  const [formState, setFormState] = useState({
    image_name: "",
    image_size: "",
    image: "",
  });

  const inputFileOnChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.files[0],
      [e.target.name + "_name"]: e.target.files[0].name,
      [e.target.name + "_size"]: e.target.files[0].size,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", formState.image);
    formData.append("_method", "PUT");

    api
      .post(`files/${slug}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          let progressCompleted = Math.round((e.loaded * 100) / e.total);
          setProgress(progressCompleted);
        },
      })
      .then((res) => {
        setTimeout(() => {
          close();
          window.location.assign(`/file/${slug}/edit`);
        }, 1000);
        setProgress(0);
      })
      .catch((err) => setProgress(0));
  };

  return (
    <>
      {progress > 0 && <FileLoader percentage={progress} />}
      <section className="text-yellow-500">
        <header>
          <h1 className="text-xl font-montserrat-bold mb-5">
            Faýl suratyny üýtgetmek
          </h1>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {formState.image && (
            <img
              src={URL.createObjectURL(formState.image)}
              alt="Selected image"
              className="rounded-lg mb-10"
            />
          )}
          <div className="relative w-full border border-slate-800 group bg-slate-800 rounded-lg">
            <div
              className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                formState.image_name?.length && "-translate-y-7 text-yellow-300"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 text-gray-300`}
            >
              Surat saýla
            </div>
            {formState.image_name && (
              <label
                htmlFor="image"
                className="bg-transparent absolute left-5 top-3 truncate"
              >
                {formState.image_name} (
                {humanFileSize(formState.image_size / 1024)})
              </label>
            )}
            <input
              type="file"
              name="image"
              onChange={(e) => inputFileOnChange(e)}
              className="opacity-0 p-2 w-full"
            />
          </div>

          <footer className="flex justify-between mt-5">
            <button className="bg-yellow-500 hover:bg-yellow-700 duration-300 text-slate-900 font-montserrat-bold px-7 py-2.5 rounded-lg flex items-center">
              Üýtget
            </button>
            <button
              type="button"
              onClick={close}
              className="border border-gray-700 hover:bg-gray-700 duration-900 text-slate-400 px-5 py-2.5 rounded-lg"
            >
              Bes et
            </button>
          </footer>
        </form>
      </section>
    </>
  );
};

export default ChangeFileImage;
