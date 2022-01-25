import Layout from "components/Layout/Layout";
import Title from "components/Title/Title";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Files = () => {
  return (
    <Layout className="border">
      <header className="flex justify-between items-center">
        <div>
          <Title>
            <h1>Faýllar</h1>
          </Title>
          <small>Jemi: 100</small>
        </div>

        <NavLink
          to={"/file/add"}
          className={
            "bg-amber-300 text-amber-900 font-montserrat-bold rounded-lg px-4 py-2"
          }
        >
          Faýl goş
        </NavLink>
      </header>

      <section className="grid grid-cols-12 gap-5 my-7">
        <main className="col-span-12 xl:col-span-9 order-2 xl:order-1">
          <aside className="bg-slate-900 rounded-xl flex items-center justify-between overflow-hidden relative">
            <div className="w-full flex items-center p-2">
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
            <aside className="flex items-center mr-2">
              <div className="cursor-pointer w-10 h-10 mr-2 bg-blue-500 flex justify-center items-center rounded-xl">
                <RiEdit2Fill size={18} />
              </div>
              <div className="cursor-pointer w-10 h-10 bg-red-500 flex justify-center items-center rounded-xl">
                <FaTrash size={16} />
              </div>
            </aside>
          </aside>
        </main>

        <nav className="col-span-12 xl:col-span-3 bg-gray-600 rounded-xl py-2 px-4 order-1 xl:order-2">
          <Title>Täze faýllar</Title>

          <div className="mt-5">
            <aside className="bg-slate-900 rounded-xl flex items-center justify-between mb-2">
              <div className="w-full flex items-center p-2">
                <img
                  className="w-12 h-12 object-cover rounded-xl"
                  src="http://yeketak.com/assets/images/sliders/gurtly.webp"
                  alt="slider"
                />
                <article className="my-1 px-2 md:px-3">
                  <div className="text-sm">Watanym</div>
                  <div className="text-xs w-full truncate hover mt-1 text-gray-400">
                    Hajy Ýazmämmedow
                  </div>
                </article>
              </div>
            </aside>

            <aside className="bg-slate-900 rounded-xl flex items-center justify-between mb-2">
              <div className="w-full flex items-center p-2">
                <img
                  className="w-12 h-12 object-cover rounded-xl"
                  src="http://yeketak.com/assets/images/sliders/gurtly.webp"
                  alt="slider"
                />
                <article className="my-1 px-2 md:px-3">
                  <div className="text-sm">Watanym</div>
                  <div className="text-xs w-full truncate hover mt-1 text-gray-400">
                    Hajy Ýazmämmedow
                  </div>
                </article>
              </div>
            </aside>

            <aside className="bg-slate-900 rounded-xl flex items-center justify-between mb-2">
              <div className="w-full flex items-center p-2">
                <img
                  className="w-12 h-12 object-cover rounded-xl"
                  src="http://yeketak.com/assets/images/sliders/gurtly.webp"
                  alt="slider"
                />
                <article className="my-1 px-2 md:px-3">
                  <div className="text-sm">Watanym</div>
                  <div className="text-xs w-full truncate hover mt-1 text-gray-400">
                    Hajy Ýazmämmedow
                  </div>
                </article>
              </div>
            </aside>
          </div>
        </nav>
      </section>
    </Layout>
  );
};

export default Files;
