import Layout from "components/Layout/Layout";
import { useState } from "react";

const AddFile = () => {
  const [formState, setFormState] = useState({
    name: "",
    artist_name: "",
    music_author: "",
    word_author: "",
    image: "",
    file: "",
    type: "",
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout className="border">
      <h1 className="font-medium text-lg"> Faýl goş </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-12 gap-x-4 gap-y-7 my-10"
      >
        <div className="relative col-span-12 lg:col-span-6 border group border-slate-800 rounded-lg">
          <div
            className={`bg-gray-750 absolute left-3 px-2 transform ${
              formState.name.length && "-translate-y-3"
            } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
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

        <div className="relative col-span-12 lg:col-span-6 border group border-slate-800 rounded-lg">
          <div
            className={`bg-gray-750 absolute left-3 px-2 transform ${
              formState.artist_name.length && "-translate-y-3"
            } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
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

        <div className="relative col-span-12 lg:col-span-6 border group border-slate-800 rounded-lg">
          <div
            className={`bg-gray-750 absolute left-3 px-2 transform ${
              formState.music_author.length && "-translate-y-3"
            } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
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

        <div className="relative col-span-12 lg:col-span-6 border group border-slate-800 rounded-lg">
          <div
            className={`bg-gray-750 absolute left-3 px-2 transform ${
              formState.word_author.length && "-translate-y-3"
            } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
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

        <label className="col-span-12 lg:col-span-6">
          Surat saýla
          <input
            type="file"
            onChange={(e) =>
              setFormState({ ...formState, file: e.target.files[0] })
            }
            className="block mt-2 w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-slat-700 hover:file:bg-violet-100"
          />
        </label>

        <label className="col-span-12 lg:col-span-6">
          Faýl saýla
          <input
            type="file"
            onChange={(e) =>
              setFormState({ ...formState, file: e.target.files[0] })
            }
            className="block mt-2 w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-slat-700 hover:file:bg-violet-100"
          />
        </label>
      </form>
    </Layout>
  );
};

export default AddFile;
