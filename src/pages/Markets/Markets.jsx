import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";
import Title from "components/Title/Title";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import api from "common/config/api.service";
import Emptylist from "components/Emptylist/Emptylist";

const Markets = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    api
      .get("markets")
      .then((res) => {
        setMarkets(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <header className="flex justify-between items-center">
        <div>
          <Title>
            <h1>Magazinlar</h1>
          </Title>
          <small>Jemi: {markets && markets.meta && markets.meta.total}</small>
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
          to={"/market/add"}
          className={
            "bg-amber-300 text-amber-900 font-montserrat-bold rounded-lg px-4 py-2"
          }
        >
          Market goş
        </NavLink>
      </header>

      <section className="bg-slate-900 text-white p-5 w-full my-10 rounded-lg">
        <main>
          {markets.length === 0 && <Emptylist message="Sanaw boş" />}

          {markets.length > 0 &&
            markets.map((market, index) => {
              return (
                <aside key={index} className="border p-3 rounded-lg">
                  {market.name}
                </aside>
              );
            })}
        </main>
      </section>
    </Layout>
  );
};

export default Markets;
