import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";
import Title from "components/Title/Title";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import api from "common/config/api.service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api
      .get("services")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <header className="flex justify-between items-center">
        <div>
          <Title>
            <h1>Hyzmatlar</h1>
          </Title>
          <small>
            Jemi: {services && services.meta && services.meta.total}
          </small>
        </div>

        <div className="bg-gray-900 w-6/12 xl:flex items-center justify-between rounded-xl overflow-hidden hidden">
          <input
            type="search"
            placeholder="Gözleg"
            className="bg-transparent p-3 pl-5 w-full"
          />
          <button className="bg-yellow-300 text-gray-900 p-1 rounded-xl m-2">
            <IoSearchOutline size={28} />
          </button>
        </div>

        <NavLink
          to={"/service/add"}
          className={
            "bg-amber-300 text-amber-900 font-montserrat-bold rounded-lg px-4 py-2"
          }
        >
          Hyzmat goş
        </NavLink>
      </header>

      <section className="grid grid-cols-12 gap-5 xl:gap-10 my-10">
        Services list
      </section>
    </Layout>
  );
};

export default Services;
