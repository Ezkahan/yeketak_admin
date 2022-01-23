import Layout from "components/Layout/Layout";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Files = () => {
  return (
    <Layout className="border">
      <section className="flex justify-between items-center">
        <h1> Files page </h1>
        <NavLink
          to={"/file/add"}
          className={"bg-slate-800 rounded-lg px-3 py-2"}
        >
          Faýl goş
        </NavLink>
      </section>

      <section className="flex flex-col space-y-4 my-10">
        <aside className="bg-slate-900 rounded-xl p-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-16 h-16 object-cover rounded-xl"
              src="http://yeketak.com/assets/images/sliders/gurtly.webp"
              alt="slider"
            />
            <article className="my-1 px-2 md:px-5">
              <div className=" font-semibold">Watanym</div>
              <div className="w-full truncate hover mt-1 text-gray-400">
                Hajy Ýazmämmedow
              </div>
            </article>
          </div>
          <aside className="flex items-center">
            <div className="mr-2 cursor-pointer w-10 h-10 bg-blue-500 flex justify-center items-center rounded-xl">
              <RiEdit2Fill size={18} />
            </div>
            <div className="cursor-pointer w-10 h-10 bg-red-500 flex justify-center items-center rounded-xl">
              <FaTrash size={16} />
            </div>
          </aside>
        </aside>

        <aside className="bg-slate-900 rounded-xl p-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-16 h-16 object-cover rounded-xl"
              src="http://yeketak.com/assets/images/sliders/gurtly.webp"
              alt="slider"
            />
            <article className="my-1 px-2 md:px-5">
              <div className=" font-semibold">Watanym</div>
              <div className="w-full truncate hover mt-1 text-gray-400">
                Hajy Ýazmämmedow
              </div>
            </article>
          </div>
          <aside className="flex items-center">
            <div className="mr-2 cursor-pointer w-10 h-10 bg-blue-500 flex justify-center items-center rounded-xl">
              <RiEdit2Fill size={18} />
            </div>
            <div className="cursor-pointer w-10 h-10 bg-red-500 flex justify-center items-center rounded-xl">
              <FaTrash size={16} />
            </div>
          </aside>
        </aside>
      </section>
    </Layout>
  );
};

export default Files;
