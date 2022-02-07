import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Title from "components/Title/Title";
import { useEffect, useState } from "react";
import api from "common/config/api.service";

const Sliders = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    api
      .get("slides")
      .then((res) => {
        setSlides(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <header className="flex justify-between items-center">
        <div>
          <Title>
            <h1>Slaýderlar</h1>
          </Title>
          <small>Jemi: {slides.length}</small>
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

      <section className="grid grid-cols-12 gap-10 my-10">
        {slides.length > 0 &&
          slides.map((slide, index) => {
            return (
              <aside
                key={index}
                className="col-span-12 lg:col-span-6 relative bg-slate-900 rounded-3xl overflow-hidden"
              >
                <img
                  className="w-full rounded-xl brightness-75 hover:brightness-125 transform duration-500"
                  src={slide.image}
                  alt="Slide"
                />
                <div className="bg-red-500 bg-opacity-90 backdrop-blur absolute top-3 right-3 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-100 duration-500 cursor-pointer">
                  <FaTrash size={20} />
                </div>
              </aside>
            );
          })}
      </section>
    </Layout>
  );
};

export default Sliders;
