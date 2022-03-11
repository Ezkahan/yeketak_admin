import { IoTrashOutline } from "react-icons/io5";
import { editMarket } from "api/services/MarketService";
import { useState } from "react";

const EditMarket = ({ market, marketEditHandler }) => {
  const [marketData, setMarketData] = useState(market ?? []);
  const onChange = (e) => {
    e.preventDefault();

    setMarketData({
      ...marketData,
      [e.target.name]: e.target.value,
    });
  };

  const marketEdit = () => {
    editMarket(marketData)
      .then((res) => {
        marketEditHandler(null);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="flex flex-col justify-between h-full font-montserrat-medium">
      <header>
        <h1 className="text-xl font-montserrat-bold">
          Market maglumatlaryny üýtgetmek
        </h1>
        <small className="text-sm block py-3">
          Agza ady:
          <strong className="font-montserrat-bold text-yellow-600 ml-2">
            {market.name}
          </strong>
        </small>
      </header>

      <main className="py-5">
        <form onChange={onChange} className="grid grid-cols-12 gap-8">
          <div className="relative col-span-12 border border-slate-200 group bg-slate-100 rounded-lg">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 ${
                marketData.name &&
                marketData.name.length &&
                "-translate-y-7 text-yellow-500"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
            >
              Market ady
            </div>
            <input
              name="name"
              type="text"
              value={marketData.name}
              className="bg-transparent p-3 w-full"
            />
          </div>

          <div className="relative col-span-12 border border-slate-200 group bg-slate-100 rounded-lg">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 ${
                marketData.description &&
                marketData.description.length &&
                "-translate-y-7 text-yellow-500"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
            >
              Market maglumaty
            </div>
            <textarea
              name="description"
              value={marketData.description}
              className="bg-transparent p-3 w-full"
            ></textarea>
          </div>
        </form>
      </main>

      <footer className="flex items-center justify-between">
        <button
          onClick={marketEdit}
          className="bg-green-500 hover:bg-green-700 duration-300 text-green-100 px-5 py-2.5 rounded-lg flex items-center"
        >
          <IoTrashOutline size={20} className="mr-2" /> Ýatda sakla
        </button>
        <button
          type="button"
          onClick={() => marketEditHandler(null)}
          className="border border-gray-300 hover:bg-gray-300 duration-300 text-slate-900 px-5 py-2.5 rounded-lg"
        >
          Bes et
        </button>
      </footer>
    </main>
  );
};

export default EditMarket;
