import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import Title from "components/Title/Title";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import api from "common/config/api.service";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    api
      .get("artists")
      .then((res) => setArtists(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <header className="flex justify-between items-center">
        <div>
          <Title>
            <h1>Bagşylar</h1>
          </Title>
          <small>Jemi: {artists && artists.meta && artists.meta.total}</small>
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
          to={"/artist/add"}
          className={
            "bg-amber-300 text-amber-900 font-montserrat-bold rounded-lg px-4 py-2"
          }
        >
          Bagşy goş
        </NavLink>
      </header>

      <section className="grid grid-cols-12 gap-5 xl:gap-10 my-10">
        {artists &&
          artists.data &&
          artists.data.map((artist, index) => {
            return (
              <colgroup
                key={index}
                className="flex justify-between items-center col-span-12 xl:col-span-4 relative duration-500 bg-slate-900 shadow-xl shadow-slate-800 rounded-xl p-4"
              >
                <aside className="flex items-center">
                  <img
                    className="h-24 object-cover rounded-xl hover:brightness-125 transform duration-500"
                    src={artist.image}
                    alt="slider"
                  />
                  <div className="flex flex-col px-4">
                    <h1 className="font-semibold mb-2">{artist.name}</h1>
                    <small className="text-yellow-500 mb-1">Aýdymlar: 10</small>
                    <small className="text-yellow-500 mb-1">Klipler: 10</small>
                  </div>
                </aside>

                <aside className="flex flex-col items-center">
                  <div className="bg-blue-400 bg-opacity-50 cursor-pointer hover:bg-opacity-100 duration-500 backdrop-blur w-8 h-8 flex justify-center items-center rounded-xl mb-2">
                    <RiEdit2Fill size={18} />
                  </div>
                  <div className="bg-red-400 bg-opacity-50 cursor-pointer hover:bg-opacity-100 duration-500 backdrop-blur w-8 h-8 flex justify-center items-center rounded-xl">
                    <FaTrash size={16} />
                  </div>
                </aside>
              </colgroup>
            );
          })}
      </section>
    </Layout>
  );
};

export default Artists;
