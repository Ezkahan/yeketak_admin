import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import Title from "components/Title/Title";
import { IoSearchOutline } from "react-icons/io5";

const Artists = () => {
  return (
    <Layout className="border">
      <header className="flex justify-between items-center">
        <div>
          <Title>
            <h1>Bagşylar</h1>
          </Title>
          <small>Jemi: 100</small>
        </div>

        <div className="bg-gray-900 w-6/12 xl:flex items-center justify-between rounded-xl overflow-hidden hidden">
          <input
            type="search"
            placeholder="Gözleg..."
            className="bg-transparent p-3 pl-5 w-full"
          />
          <button className="bg-yellow-300 text-gray-900 p-1 rounded-xl m-2">
            <IoSearchOutline size={28} />
          </button>
        </div>

        <NavLink
          to={"/artist/add"}
          className={
            "bg-amber-300 text-amber-900 font-montserrat-bold rounded-lg px-4 py-2"
          }
        >
          Bagşy goş
        </NavLink>
      </header>

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
