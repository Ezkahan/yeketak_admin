import api from "common/config/api.service";
import humanFileSize from "common/helpers/filesize";
import Layout from "components/Layout/Layout";
import Title from "components/Title/Title";
import { useState } from "react";
import FileLoader from "components/Loader/FileLoader";
import { useNavigate } from "react-router-dom";
import { IoImagesOutline } from "react-icons/io5";

const AddFile = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [formState, setFormState] = useState({
    name: "",
    artist_name: "",
    music_author: "",
    word_author: "",
    image: "",
    file: "",
    type: "mp3",
    expires_at: "",
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const inputFileOnChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.files[0],
      [e.target.name + "_name"]: e.target.files[0].name,
      name: e.target.name === "file" ? e.target.files[0].name : formState.name,
      [e.target.name + "_size"]: e.target.files[0].size,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", formState.name);
    formData.append("artist_name", formState.artist_name);
    formData.append("music_author", formState.music_author);
    formData.append("word_author", formState.word_author);
    formData.append("image", formState.image);
    formData.append("file", formState.file);
    formData.append("type", formState.type);
    formData.append("expires_at", formState.expires_at);

    api
      .post("files", formData, {
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
          navigate("/files");
        }, 1000);
        setProgress(0);
      })
      .catch((err) => setProgress(0));
  };

  return (
    <>
      {progress > 0 && <FileLoader percentage={progress} />}
      <Layout className="bg-gray-900 rounded-xl xl:px-10">
        <Title> Faýl goş </Title>

        <section className="grid grid-cols-12 items-start gap-5">
          <aside className="flex flex-col justify-between h-full col-span-12 lg:col-span-4">
            <div>
              <label htmlFor="image">
                {formState.image ? (
                  <img
                    src={URL.createObjectURL(formState.image)}
                    alt="image"
                    className="mx-auto my-5 cursor-pointer rounded-lg"
                  />
                ) : (
                  <IoImagesOutline
                    size={256}
                    className="mx-auto my-5 cursor-pointer"
                  />
                )}
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  name="image"
                  onChange={inputFileOnChange}
                />
                {/* <img
                src={FileIcon}
                alt="image"
                className="rounded-xl shadow-xl shadow-slate-900 h-72 mx-auto my-5"
              /> */}
              </label>
            </div>

            <div className="flex items-center justify-center">
              {formState.file && formState.file.type.includes("audio") && (
                <audio
                  src={URL.createObjectURL(formState.file)}
                  controls
                ></audio>
              )}

              {formState.file && formState.file.type.includes("video") && (
                <video
                  src={URL.createObjectURL(formState.file)}
                  controls
                ></video>
              )}
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-12 col-span-12 lg:col-span-8 gap-x-4 gap-y-7 xl:ml-5 my-5"
          >
            <div className="relative col-span-12 border border-slate-800 group bg-slate-800 rounded-lg">
              <div
                className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                  formState.file_name?.length &&
                  "-translate-y-7 text-yellow-300"
                } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 text-gray-300`}
              >
                Faýl saýla
              </div>
              {formState.file_name && (
                <label
                  htmlFor="file"
                  className="bg-transparent absolute left-5 top-3 truncate"
                >
                  {formState.file_name} (
                  {humanFileSize(formState.file_size / 1024)})
                </label>
              )}
              <input
                type="file"
                name="file"
                onChange={(e) => inputFileOnChange(e)}
                className="opacity-0 p-2 w-full"
              />
            </div>

            <div className="relative col-span-12 border border-slate-800 group bg-slate-800 rounded-lg">
              <div
                className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                  formState.name.length && "-translate-y-7"
                } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 group-focus-within:text-yellow-300 rounded-lg duration-500 text-gray-300`}
              >
                Faýl ady
              </div>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                value={formState.name}
                className="bg-transparent p-3 w-full"
              />
            </div>

            <div className="relative col-span-12 border border-slate-800 group bg-slate-800 rounded-lg">
              <div
                className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                  formState.artist_name.length && "-translate-y-7"
                } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 group-focus-within:text-yellow-300 rounded-lg duration-500 text-gray-300`}
              >
                Bagşynyň ady
              </div>
              <input
                onChange={handleChange}
                name="artist_name"
                type="text"
                className="bg-transparent p-3 w-full"
              />
            </div>

            <aside className="grid grid-cols-12 gap-5 col-span-12">
              <div className="relative col-span-12 lg:col-span-6 border border-slate-800 group bg-slate-800 rounded-lg">
                <div
                  className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                    formState.music_author.length && "-translate-y-7"
                  } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 group-focus-within:text-yellow-300 rounded-lg duration-500 text-gray-300`}
                >
                  Sazy
                </div>
                <input
                  onChange={handleChange}
                  name="music_author"
                  type="text"
                  className="bg-transparent p-3 w-full"
                />
              </div>

              <div className="relative col-span-12 lg:col-span-6 border border-slate-800 group bg-slate-800 rounded-lg">
                <div
                  className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                    formState.word_author.length && "-translate-y-7"
                  } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 group-focus-within:text-yellow-300 rounded-lg duration-500 text-gray-300`}
                >
                  Sözi
                </div>
                <input
                  onChange={handleChange}
                  name="word_author"
                  type="text"
                  className="bg-transparent p-3 w-full"
                />
              </div>
            </aside>

            <aside className="grid grid-cols-12 col-span-12 w-full gap-5">
              <div className="col-span-12 lg:col-span-6">
                <select
                  onChange={handleChange}
                  name="type"
                  className="bg-slate-800 border border-slate-800 group rounded-lg w-full px-5 py-3 appearance-none"
                >
                  <option value="mp3"> Aýdym </option>
                  <option value="mp4"> Klip </option>
                </select>
              </div>

              <div className="relative col-span-12 lg:col-span-6 border border-slate-800 group bg-slate-800 rounded-lg">
                <div
                  className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                    formState.expires_at.length && "-translate-y-7"
                  } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 group-focus-within:text-yellow-300 rounded-lg duration-500 text-gray-300`}
                >
                  Pozulmaly wagty (gün)
                </div>
                <input
                  onChange={handleChange}
                  name="expires_at"
                  type="number"
                  className="bg-transparent p-3 w-full"
                />
              </div>
            </aside>

            <div className="col-span-12">
              <button className="bg-yellow-300 hover:bg-yellow-500 duration-300 text-slate-900 px-5 py-2.5 w-32 font-montserrat-bold rounded-lg">
                Ýükle
              </button>
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
};

export default AddFile;
