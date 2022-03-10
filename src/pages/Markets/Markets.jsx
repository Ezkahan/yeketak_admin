import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";
import Title from "components/Title/Title";
import { useEffect, useState } from "react";
import api from "common/config/api.service";
import Emptylist from "components/Emptylist/Emptylist";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import statusByCode from "common/helpers/statusByCode";
import PageLoader from "components/Loader/PageLoader";

const Markets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    api
      .get("markets")
      .then((res) => {
        setMarkets(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        console.log(err);
      });
  }, []);

  return (
    <>
      {isLoading > 0 && <PageLoader />}
      <Layout>
        <header className="flex justify-between items-center">
          <div>
            <Title>
              <h1>Magazinlar</h1>
            </Title>
            <small>Jemi: {markets && markets.meta && markets.meta.total}</small>
          </div>
        </header>

        <section className="bg-slate-900 text-white w-full my-5 rounded-lg">
          {markets && markets.data && markets.data.length === 0 && (
            <Emptylist message="Sanaw boş" />
          )}

          <table className="table-fixed w-full overflow-hidden">
            <thead className="text-left bg-yellow-300 text-slate-900">
              <tr>
                <th className="w-16 px-5 py-2 rounded-tl-lg rounded-bl-lg">
                  ID
                </th>
                <th className="px-5 py-2">Ady</th>
                <th className="px-5 py-2">Eyesi</th>
                <th className="px-5 py-2">Haryt sany</th>
                <th className="px-5 py-2">Ýagdaýy</th>
                <th className="w-48 px-5 py-2 rounded-tr-lg rounded-br-lg">
                  Sazlama
                </th>
              </tr>
            </thead>
            <tbody>
              {markets &&
                markets.data &&
                markets.data.length > 0 &&
                markets.data.map((market, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-slate-800 border-b rounded-lg last:border-none"
                    >
                      <td className="px-5 py-2">{market.id}</td>
                      <td className="px-5 py-2">{market.name}</td>
                      <td className="px-5 py-2">
                        {market.owner && market.owner.name
                          ? market.owner.name
                          : "näbelli"}
                      </td>
                      <td className="px-5 py-2">{market.images_count}</td>
                      <td className="px-5 py-2">
                        {statusByCode(market.owner_is_confirm)}
                      </td>
                      <td className="px-5 py-2">
                        <div className="flex items-center">
                          <NavLink
                            to={`/market/${market.id}/edit`}
                            className="cursor-pointer w-10 h-10 mr-2 border border-blue-900 text-blue-500 hover:bg-blue-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                          >
                            <RiEdit2Fill size={18} />
                          </NavLink>
                          <button
                            type="button"
                            // onClick={() => fileDeleteHandler(file.slug)}
                            className="cursor-pointer w-10 h-10 border border-red-900 text-red-500 hover:bg-red-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                          >
                            <FaTrash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </Layout>
    </>
  );
};

export default Markets;
