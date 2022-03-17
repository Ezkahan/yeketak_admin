import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { updateServiceImage } from "api/services/ServiceService";
import { useState } from "react";

const EditServiceImage = ({ image, serviceImageEditHandler }) => {
  const [serviceImageData, setServiceImageData] = useState(image ?? []);
  const onChange = (e) => {
    e.preventDefault();

    setServiceImageData({
      ...serviceImageData,
      [e.target.name]: e.target.value,
    });
  };

  const marketEdit = () => {
    updateServiceImage(serviceImageData)
      .then((res) => {
        serviceImageEditHandler(null);
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
          Haryt maglumatlaryny üýtgetmek
        </h1>
        <small className="text-sm block py-3">
          Haryt ady:
          <strong className="font-montserrat-bold text-yellow-600 ml-2">
            {image.name}
          </strong>
        </small>
      </header>

      <main className="py-5">
        <form onChange={onChange} className="grid grid-cols-12 gap-8">
          <div className="relative col-span-12 border border-slate-200 group bg-slate-100 rounded-lg">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 ${
                serviceImageData.name &&
                serviceImageData.name.length &&
                "-translate-y-7 text-yellow-500"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
            >
              Hyzmat ady
            </div>
            <input
              name="name"
              type="text"
              value={serviceImageData.name}
              className="bg-transparent p-3 w-full"
            />
          </div>

          <div className="relative col-span-12 border border-slate-200 group bg-slate-100 rounded-lg">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 ${
                serviceImageData.price && "-translate-y-7 text-yellow-500"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
            >
              Hyzmat ady
            </div>
            <input
              name="price"
              type="text"
              value={serviceImageData.price}
              className="bg-transparent p-3 w-full"
            />
          </div>

          <div className="relative col-span-12 border border-slate-200 group bg-slate-100 rounded-lg">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 ${
                serviceImageData.description &&
                serviceImageData.description.length &&
                "-translate-y-7 text-yellow-500"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
            >
              Hyzmat maglumaty
            </div>
            <textarea
              name="description"
              value={serviceImageData.description}
              className="bg-transparent p-3 w-full"
            ></textarea>
          </div>

          <div className="relative col-span-12">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 transform -translate-y-7 rounded-lg duration-500 text-yellow-500`}
            >
              Haryt ýagdaýy
            </div>
            <select
              name="confirm"
              className="bg-slate-100 border border-slate-200 group rounded-lg w-full px-5 py-3 appearance-none"
            >
              <option
                selected={serviceImageData && serviceImageData.confirm === 0}
                value="0"
              >
                Tassyklanmadyk
              </option>
              <option
                selected={serviceImageData && serviceImageData.confirm === 1}
                value="1"
              >
                Tassyklanan
              </option>
            </select>
          </div>
        </form>
      </main>

      <footer className="flex items-center justify-between">
        <button
          onClick={marketEdit}
          className="bg-green-500 hover:bg-green-700 duration-300 text-green-100 px-4 py-2.5 rounded-lg flex items-center"
        >
          <IoCheckmarkCircleOutline size={24} className="mr-2" /> Ýatda sakla
        </button>
        <button
          type="button"
          onClick={() => serviceImageEditHandler(null)}
          className="border border-gray-300 hover:bg-gray-300 duration-300 text-slate-900 px-5 py-2.5 rounded-lg"
        >
          Bes et
        </button>
      </footer>
    </main>
  );
};

export default EditServiceImage;
