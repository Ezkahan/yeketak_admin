import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";
import Title from "components/Title/Title";
import { IoEye, IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import api from "common/config/api.service";
import Emptylist from "components/Emptylist/Emptylist";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import statusByCode from "common/helpers/statusByCode";
import PageLoader from "components/Loader/PageLoader";
import DeleteService from "./DeleteService";
import EditService from "./EditService";
import SmallModal from "components/SmallModal/SmallModal";
import { getServices } from "api/services/ServiceService";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [serviceEdit, setServiceEdit] = useState({
    edit: false,
    service: [],
  });
  const [serviceDelete, setServiceDelete] = useState({
    delete: false,
    service: null,
  });

  const loadServices = () => {
    getServices()
      .then((res) => {
        setServices(res.data);
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
  };

  const serviceEditHandler = (service) => {
    setServiceEdit({
      edit: !serviceEdit.edit,
      service: !serviceEdit.edit ? service : [],
    });

    loadServices();
  };

  const serviceDeleteHandler = (service) => {
    setServiceDelete({
      delete: !serviceDelete.delete,
      service: !serviceDelete.delete ? service : null,
    });
    loadServices();
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <>
      {isLoading > 0 && <PageLoader />}

      <SmallModal isOpen={serviceDelete.delete}>
        <DeleteService
          service={serviceDelete.service}
          serviceDeleteHandler={serviceDeleteHandler}
        />
      </SmallModal>

      <SmallModal isOpen={serviceEdit.edit}>
        <EditService
          service={serviceEdit.service}
          serviceEditHandler={serviceEditHandler}
        />
      </SmallModal>

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
        </header>

        <section className="bg-slate-900 text-white my-5 rounded-lg overflow-x-auto scroll-none">
          {services && services.data && services.data.length === 0 && (
            <Emptylist message="Sanaw boş" />
          )}

          {services && services.data && services.data.length > 0 && (
            <table className="table-fixed w-full">
              <thead className="text-left bg-yellow-300 text-slate-900">
                <tr>
                  <th className="w-16 px-5 py-2 rounded-tl-lg rounded-bl-lg">
                    ID
                  </th>
                  <th className="w-32 px-5 py-2">Ady</th>
                  <th className="w-48 px-5 py-2">Eyesi</th>
                  <th className="w-32 px-5 py-2">Haryt sany</th>
                  <th className="w-28 px-5 py-2">Ýagdaýy</th>
                  <th className="w-48 px-5 py-2 rounded-tr-lg rounded-br-lg">
                    Sazlama
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.data.map((service, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-slate-800 border-b rounded-lg last:border-none"
                    >
                      <td className="px-5 py-2">{service.id}</td>
                      <td className="px-5 py-2">{service.name}</td>
                      <td className="px-5 py-2">
                        {service.owner && service.owner.name
                          ? service.owner.name
                          : "näbelli"}
                      </td>
                      <td className="px-5 py-2">{service.images_count}</td>
                      <td className="px-5 py-2">
                        {statusByCode(service.owner_is_confirm)}
                      </td>
                      <td className="px-5 py-2">
                        <div className="flex items-center">
                          <NavLink
                            to={`/service/${service.id}`}
                            className="cursor-pointer w-10 h-10 mr-2 border border-yellow-900 text-yellow-500 hover:bg-yellow-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                          >
                            <IoEye size={18} />
                          </NavLink>
                          <button
                            onClick={() => serviceEditHandler(service)}
                            className="cursor-pointer w-10 h-10 mr-2 border border-blue-900 text-blue-500 hover:bg-blue-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                          >
                            <RiEdit2Fill size={18} />
                          </button>
                          <button
                            type="button"
                            onClick={() => serviceDeleteHandler(service)}
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
          )}
        </section>
      </Layout>
    </>
  );
};

export default Services;
