import api from "common/config/api.service";
import humanFileSize from "common/helpers/filesize";
import Layout from "components/Layout/Layout";
import Title from "components/Title/Title";
import { useState } from "react";
import FileLoader from "components/Loader/FileLoader";

const AddFile = () => {
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
      .post("file/store", formData, {
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
          window.location.assign("/files");
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

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-12 gap-x-4 gap-y-7 my-10"
        >
          <div className="relative col-span-12 lg:col-span-6 border border-slate-800 group bg-slate-800 rounded-lg">
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
              className="bg-transparent p-3 w-full"
            />
          </div>

          <div className="relative col-span-12 lg:col-span-6 border border-slate-800 group bg-slate-800 rounded-lg">
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

          <div className="relative col-span-12 lg:col-span-6 border border-slate-800 group bg-slate-800 rounded-lg">
            <div
              className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                formState.music_author.length && "-translate-y-7"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 group-focus-within:text-yellow-300 rounded-lg duration-500 text-gray-300`}
            >
              Faýlyň awtory
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
              Faýlyň sözi
            </div>
            <input
              onChange={handleChange}
              name="word_author"
              type="text"
              className="bg-transparent p-3 w-full"
            />
          </div>

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

          <div className="relative col-span-12 lg:col-span-6 border border-slate-800 group bg-slate-800 rounded-lg">
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

          <div className="relative col-span-12 lg:col-span-6 border border-slate-800 group bg-slate-800 rounded-lg">
            <div
              className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                formState.file_name?.length && "-translate-y-7 text-yellow-300"
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

          <div className="col-span-12">
            <button className="bg-yellow-300 hover:bg-yellow-500 duration-300 text-slate-900 px-5 py-2.5 w-32 font-montserrat-bold rounded-lg">
              Ýükle
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default AddFile;
