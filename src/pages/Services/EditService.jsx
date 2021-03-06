import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { editService } from "api/services/ServiceService";
import { useState } from "react";

const EditService = ({ service, serviceEditHandler }) => {
  const [serviceData, setServiceData] = useState(service ?? []);
  const onChange = (e) => {
    e.preventDefault();

    setServiceData({
      ...serviceData,
      [e.target.name]: e.target.value,
    });
  };

  const serviceEdit = () => {
    editService(serviceData)
      .then((res) => {
        serviceEditHandler(null);
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
          Hyzmat maglumatlaryny üýtgetmek
        </h1>
        <small className="text-sm block py-3">
          Agza ady:
          <strong className="font-montserrat-bold text-yellow-600 ml-2">
            {service.name}
          </strong>
        </small>
      </header>

      <main className="py-5">
        <form onChange={onChange} className="grid grid-cols-12 gap-8">
          <div className="relative col-span-12 border border-slate-200 group bg-slate-100 rounded-lg">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 ${
                serviceData.name &&
                serviceData.name.length &&
                "-translate-y-7 text-yellow-500"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
            >
              Hyzmat ady
            </div>
            <input
              name="name"
              type="text"
              value={serviceData.name}
              className="bg-transparent p-3 w-full"
            />
          </div>

          <div className="relative col-span-12 border border-slate-200 group bg-slate-100 rounded-lg">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 ${
                serviceData.description &&
                serviceData.description.length &&
                "-translate-y-7 text-yellow-500"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
            >
              Hyzmat maglumaty
            </div>
            <textarea
              name="description"
              value={serviceData.description}
              className="bg-transparent p-3 w-full"
            ></textarea>
          </div>
        </form>
      </main>

      <footer className="flex items-center justify-between">
        <button
          onClick={serviceEdit}
          className="bg-green-500 hover:bg-green-700 duration-300 text-green-100 px-4 py-2.5 rounded-lg flex items-center"
        >
          <IoCheckmarkCircleOutline size={24} className="mr-2" /> Ýatda sakla
        </button>
        <button
          type="button"
          onClick={() => serviceEditHandler(null)}
          className="border border-gray-300 hover:bg-gray-300 duration-300 text-slate-900 px-5 py-2.5 rounded-lg"
        >
          Bes et
        </button>
      </footer>
    </main>
  );
};

export default EditService;
