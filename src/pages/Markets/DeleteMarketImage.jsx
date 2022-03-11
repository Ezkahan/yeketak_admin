import { IoTrashOutline } from "react-icons/io5";
import { deleteMarketImage } from "api/services/MarketService";

const DeleteMarketImage = ({ image, marketImageDeleteHandler }) => {
  const imageDelete = () => {
    deleteMarketImage(image.id)
      .then((res) => {
        marketImageDeleteHandler(null);
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
          Suraty pozmagy tassyklaň!
        </h1>
        <small className="text-sm block py-3">
          Surat ady:
          <strong className="font-montserrat-bold text-yellow-600 ml-2">
            {image.name}
          </strong>
        </small>
      </header>

      <footer className="flex items-center justify-between">
        <button
          onClick={imageDelete}
          className="bg-red-500 hover:bg-red-700 duration-300 text-red-100 px-5 py-2.5 rounded-lg flex items-center"
        >
          <IoTrashOutline size={20} className="mr-2" /> Poz
        </button>
        <button
          onClick={() => marketImageDeleteHandler(null)}
          className="border border-gray-300 hover:bg-gray-300 duration-300 text-slate-900 px-5 py-2.5 rounded-lg"
        >
          Bes et
        </button>
      </footer>
    </main>
  );
};

export default DeleteMarketImage;
