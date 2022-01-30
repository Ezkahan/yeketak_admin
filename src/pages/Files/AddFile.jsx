import Layout from "components/Layout/Layout";
import { useState } from "react";
import { IoAdd, IoAddOutline, IoCheckboxOutline} from "react-icons/io5";

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
        <div className="relative col-span-12 lg:col-span-6 group">
          <div
            className={`bg-gray-900 rounded-lg absolute left-3 px-2 transform ${formState.name.length && "-translate-y-3"
              } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
          >
            Faýl ady
          </div>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="bg-gray-900 focus:outline-none border border-gray-700 rounded-lg p-3 w-full"
          />
        </div>

        <div className="relative col-span-12 lg:col-span-6  group">
          <div
            className={` absolute left-3 px-2 transform bg-gray-900 rounded-lg ${formState.artist_name.length && "-translate-y-3"
              } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
          >
            Bagşynyň ady
          </div>
          <input
            onChange={handleChange}
            name="artist_name"
            type="text"
            className="bg-gray-900 border border-gray-700 p-3 rounded-lg w-full"
          />
        </div>

        <div className="relative col-span-12 lg:col-span-6  group">
          <div
            className={`bg-gray-900 rounded-lg absolute left-3 px-2 transform ${formState.music_author.length && "-translate-y-3"
              } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
          >
            Faýlyň awtory
          </div>
          <input
            onChange={handleChange}
            name="music_author"
            type="text"
            className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full"
          />
        </div>

        <div className="relative col-span-12 lg:col-span-6 group ">
          <div
            className={`bg-gray-900 rounded-lg absolute left-3 px-2 transform ${formState.word_author.length && "-translate-y-3"
              } group-focus-within:-translate-y-3 duration-500 top-0 text-gray-300`}
          >
            Faýlyň sözi
          </div>
          <input
            onChange={handleChange}
            name="word_author"
            type="text"
            className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full"
          />
        </div>
        <div className="relative col-span-12 lg:col-span-6 group h-12 border w-full bg-gray-900 rounded-lg text-slate-300 border-gray-700">
        <label htmlFor="img" className="absolute -top-1 left-5">
          Surat saýla {formState.image}  
        </label>
        <input
            type="file"
            onChange={(e) =>
              setFormState({ ...formState, file: e.target.files[0].name, file: e.target.files[0]})
            }
            className="block opacity-0 text-sm text-slate-300 file:p-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-slat-700 hover:file:bg-violet-100"
          />
        </div>
 
        <div className="relative col-span-12 lg:col-span-6 group h-12 border w-full bg-gray-900 rounded-lg text-slate-300 border-gray-700">
         <label htmlFor="filename" className="absolute -top-1 left-5">
             Fayl sayla {formState.filename}
         </label>
          <input
            type="file"
            
            onChange={(e) =>
              setFormState({ ...formState, filename: e.target.files[0].name, file: e.target.files[0] })
            }
            className="block file:w-full opacity-0 text-slate-300  file:p-3  file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-900 file:text-slate-50 file:cursor-pointer hover:file:bg-gray-700"
          />
        </div>
        <button className="w-full h-12 col-span-12 lg:col-span-2 bg-amber-300 hover:bg-amber-400 text-amber-900 font-montserrat-bold  rounded-lg flex flex-row items-center justify-center">
          <IoAdd className="font-black mr-3" size={24}/><b>{'Husa sal'}</b>
        </button>
      </form>
    </Layout>
  );
};

export default AddFile;
