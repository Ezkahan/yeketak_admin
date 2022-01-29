import Layout from "components/Layout/Layout";
import { useState } from "react";

const AddArtist = () => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout className="border">
      <h1 className="font-medium text-lg"> Bagşy goş </h1>
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
            Bagşynyň ady
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
              formState.description.length && "-translate-y-3"
            } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
          >
            Bagşy barada
          </div>
          <input
            onChange={handleChange}
            name="description"
            type="text"
            className="bg-transparent p-3 w-full"
          />
        </div>

        <label className="col-span-12 lg:col-span-6">
          Surat saýla
          <input
            type="file"
            onChange={(e) =>
              setFormState({ ...formState, image: e.target.files[0] })
            }
            className="block mt-2 w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-slat-700 hover:file:bg-violet-100"
          />
        </label>
      </form>
    </Layout>
  );
};

export default AddArtist;
