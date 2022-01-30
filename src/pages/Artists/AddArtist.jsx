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
        <div className="relative col-span-12 lg:col-span-6  group  rounded-lg">
          <div
            className={`bg-gray-900 rounded-lg absolute left-3 px-2 transform ${
              formState.name.length && "-translate-y-3"
            } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
          >
            {'Bagşyn ady'}
          </div>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full"
          />
        </div>
        <div className="relative col-span-12 lg:col-span-6  group  rounded-lg">
          <div
            className={`bg-gray-900 rounded-lg absolute left-3 px-2 transform ${
              formState.name.length && "-translate-y-3"
            } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
          >
            {'Bagşy barada'}
          </div>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full"
          />
        </div>
        <div className="relative col-span-12 lg:col-span-6 group  h-12 border w-full bg-gray-900 rounded-lg text-slate-300 border-gray-700">
        <label htmlFor="img" className="absolute -top-1 left-5">
          Surat saýla {formState.image}  
        </label>
        <input
            type="file"
            onChange={(e) =>
              setFormState({ ...formState, image: e.target.files[0].name, image: e.target.files[0]})
            }
            className="block opacity-0 text-sm cursor-pointer text-slate-300 file:p-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-slat-700 hover:file:bg-violet-100"
          />
        </div>
        <button className="relative col-span-12 lg:col-span-2 group h-11 border w-full text-lg bg-amber-300 hover:bg-amber-400 text-amber-900 rounded-lg font-montserrat-bold">Tassyklan</button>
      </form>
    </Layout>
  );
};

export default AddArtist;
