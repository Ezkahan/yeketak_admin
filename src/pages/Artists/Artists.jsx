import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";
import { RiEdit2Fill, RiEditCircleFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

const Artists = () => {
  return (
    <Layout className="border">
      <section className="flex justify-between items-center">
        <h1> Artists page </h1>
        <NavLink
          to={"/artist/add"}
          className={"bg-slate-800 rounded-lg px-3 py-2"}
        >
          Bagşy goş
        </NavLink>
      </section>

      <section className="grid grid-cols-12 gap-4 my-10">
        <aside className="col-span-12 lg:col-span-6 xl:col-span-4 relative duration-500 bg-slate-900 rounded-xl p-2">
          <img
            className="w-full rounded-xl hover:brightness-125 transform duration-500"
            src="http://yeketak.com/assets/images/sliders/gurtly.webp"
            alt="slider"
          />
          <article className="my-5 px-2 md:px-5">
            <div className=" font-semibold">Hajy Ýazmämmedow</div>
            <div className="w-full truncate hover mt-2 text-gray-400">
              Dostlar iki sany accanut bar satjak aljak bolsanyz teswir
              galdyryn, her accanut ucin 50 manat. Dostlar iki sany accanut bar
              satjak aljak bolsanyz teswir galdyryn, her accanut ucin 50 manat.
            </div>
          </article>
          <aside className="flex items-center absolute top-3 right-3">
            <div className="mr-2 bg-blue-300 bg-opacity-50 cursor-pointer hover:bg-opacity-100 duration-500 backdrop-blur w-14 h-14 flex justify-center items-center rounded-xl">
              <RiEdit2Fill size={22} />
            </div>
            <div className="bg-red-300 bg-opacity-50 cursor-pointer hover:bg-opacity-100 duration-500 backdrop-blur w-14 h-14 flex justify-center items-center rounded-xl">
              <FaTrash size={20} />
            </div>
          </aside>
        </aside>
      </section>
    </Layout>
  );
};

export default Artists;
