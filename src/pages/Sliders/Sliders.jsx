import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Title from "components/Title/Title";

const Sliders = () => {
  return (
    <Layout className="border">
      <header className="flex justify-between items-center">
        <div>
          <Title>
            <h1>Slaýderlar</h1>
          </Title>
          <small>Jemi: 100</small>
        </div>

        <NavLink
          to={"/slider/add"}
          className={
            "bg-amber-300 text-amber-900 font-montserrat-bold rounded-lg px-4 py-2"
          }
        >
          Slaýder goş
        </NavLink>
      </header>

      <section className="grid grid-cols-12 gap-4 my-10">
        <aside className="col-span-12 lg:col-span-6 relative">
          <img
            className="w-full rounded-xl hover:brightness-125 transform duration-500"
            src="http://yeketak.com/assets/images/sliders/gurtly.webp"
            alt="slider"
          />
          <div className="bg-red-300 bg-opacity-50 backdrop-blur absolute bottom-3 right-3 w-16 h-16 rounded-xl border flex items-center justify-center hover:bg-opacity-100 duration-500 cursor-pointer">
            <FaTrash size={20} />
          </div>
        </aside>

        <aside className="col-span-12 lg:col-span-6 relative">
          <img
            className="w-full rounded-xl hover:brightness-125 transform duration-500"
            src="http://yeketak.com/assets/images/sliders/summul-doner.webp"
            alt="slider"
          />
          <div className="bg-red-300 bg-opacity-50 backdrop-blur absolute bottom-3 right-3 w-16 h-16 rounded-xl border flex items-center justify-center hover:bg-opacity-100 duration-500 cursor-pointer">
            <FaTrash size={20} />
          </div>
        </aside>
      </section>
    </Layout>
  );
};

export default Sliders;
