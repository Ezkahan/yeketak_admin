import { IoTrashOutline } from "react-icons/io5";
import { deleteService } from "api/services/ServiceService";

const DeleteService = ({ service, serviceDeleteHandler }) => {
  const serviceDelete = () => {
    deleteService(service.id)
      .then((res) => {
        serviceDeleteHandler(null);
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
          Hyzmaty pozmagy tassyklaň!
        </h1>
        <small className="text-sm block py-3">
          Hyzmat ady:
          <strong className="font-montserrat-bold text-yellow-600 ml-2">
            {service.name}
          </strong>
        </small>
      </header>

      <footer className="flex items-center justify-between">
        <button
          onClick={serviceDelete}
          className="bg-red-500 hover:bg-red-700 duration-300 text-red-100 px-5 py-2.5 rounded-lg flex items-center"
        >
          <IoTrashOutline size={20} className="mr-2" /> Poz
        </button>
        <button
          onClick={() => serviceDeleteHandler(null)}
          className="border border-gray-300 hover:bg-gray-300 duration-300 text-slate-900 px-5 py-2.5 rounded-lg"
        >
          Bes et
        </button>
      </footer>
    </main>
  );
};

export default DeleteService;
