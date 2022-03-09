import { getUsers } from "api/services/UserService";
import statusByCode from "common/helpers/statusByCode";
import Emptylist from "components/Emptylist/Emptylist";
import Layout from "components/Layout/Layout";
import PageLoader from "components/Loader/PageLoader";
import Title from "components/Title/Title";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(page)
      .then((res) => {
        setUsers(res.data.data);
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
              <h1>Agzalar</h1>
            </Title>
            <small>Jemi: {users.length}</small>
          </div>
        </header>

        <section className="bg-slate-900 text-white w-full my-5 rounded-lg">
          {users.length === 0 && <Emptylist message="Sanaw boş" />}

          <table className="table-fixed w-full overflow-hidden">
            <thead className="text-left bg-yellow-300 text-slate-900">
              <tr>
                <th className="w-16 px-5 py-2 rounded-tl-lg rounded-bl-lg">
                  ID
                </th>
                <th className="px-5 py-2">Ady</th>
                <th className="px-5 py-2">Telefon</th>
                <th className="px-5 py-2">Kody</th>
                <th className="px-5 py-2">Ýagdaýy</th>
                <th className="px-5 py-2">Görnüşi</th>
                <th className="w-48 px-5 py-2 rounded-tr-lg rounded-br-lg">
                  Sazlama
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.length > 0 &&
                users.map((user, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-slate-800 border-b rounded-lg last:border-none"
                    >
                      <td className="px-5 py-2">{user.id}</td>
                      <td className="px-5 py-2">{user.name}</td>
                      <td className="px-5 py-2">{user.phone}</td>
                      <td className="px-5 py-2">{user.confirm_code}</td>
                      <td className="px-5 py-2">
                        {statusByCode(user.confirm)}
                      </td>
                      <td className="px-5 py-2">{user.type}</td>
                      <td className="px-5 py-2">
                        <div className="flex items-center">
                          <NavLink
                            to={`/user/${user.id}/edit`}
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

export default Users;
