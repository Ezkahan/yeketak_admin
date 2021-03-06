import api from "common/config/api.service";
import { IoTrashOutline } from "react-icons/io5";

const DeleteSlider = ({ id, sliderDeleteHandler }) => {
  const deleteSlider = () => {
    api
      .delete(`slider/${id}`)
      .then((res) => {
        sliderDeleteHandler(null);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="flex flex-col justify-between h-full font-montserrat-medium">
      <header>
        <h1 className="text-xl font-montserrat-bold text-center">
          Slaýderi pozmagy tassyklaň!
        </h1>
      </header>

      <footer className="flex items-center justify-between">
        <button
          onClick={deleteSlider}
          className="bg-red-500 hover:bg-red-700 duration-300 text-red-100 px-5 py-2.5 rounded-lg flex items-center"
        >
          <IoTrashOutline size={20} className="mr-2" /> Poz
        </button>
        <button
          onClick={() => sliderDeleteHandler(null)}
          className="border border-gray-300 hover:bg-gray-300 duration-300 text-slate-900 px-5 py-2.5 rounded-lg"
        >
          Bes et
        </button>
      </footer>
    </main>
  );
};

export default DeleteSlider;
