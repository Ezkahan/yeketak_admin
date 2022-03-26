import { getUsers } from "api/services/UserService";
import statusByCode from "common/helpers/statusByCode";
import Emptylist from "components/Emptylist/Emptylist";
import Layout from "components/Layout/Layout";
import PageLoader from "components/Loader/PageLoader";
import SmallModal from "components/SmallModal/SmallModal";
import Title from "components/Title/Title";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userEdit, setUserEdit] = useState({
    edit: false,
    user: [],
  });
  const [userDelete, setUserDelete] = useState({
    delete: false,
    id: null,
    name: null,
  });

  const userEditHandler = (user) => {
    setUserEdit({
      edit: !userEdit.edit,
      user: !userEdit.edit ? user : [],
    });

    loadUsers();
  };

  const userDeleteHandler = (id, name) => {
    setUserDelete({
      delete: !userDelete.delete,
      id: !userDelete.delete ? id : null,
      name: !userDelete.delete ? name : null,
    });

    loadUsers();
  };

  const searchUser = (e) => {
    setSearchTerm(e.target.value);
  };

  const loadUsers = () => {
    getUsers(page, searchTerm)
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
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    loadUsers();
  }, [page, searchTerm]);

  return (
    <>
      {isLoading > 0 && <PageLoader />}

      <SmallModal isOpen={userDelete.delete}>
        <DeleteUser
          id={userDelete.id}
          name={userDelete.name}
          userDeleteHandler={userDeleteHandler}
        />
      </SmallModal>

      <SmallModal isOpen={userEdit.edit}>
        <EditUser user={userEdit.user} userEditHandler={userEditHandler} />
      </SmallModal>

      <Layout>
        <header className="flex xl:flex-row flex-col justify-between xl:items-center">
          <div>
            <Title>
              <h1>Agzalar</h1>
            </Title>
            <small>Jemi: {users.length}</small>
          </div>

          <div className="bg-gray-900 w-full xl:w-4/12 mt-3 xl:mt-0 flex items-center justify-between rounded-xl overflow-hidden">
            <input
              type="search"
              placeholder="Ady, telefony, kody"
              onChange={searchUser}
              className="bg-transparent p-2 pl-5 w-full"
            />
            <button className="text-yellow-300 p-1 rounded-xl m-2">
              <IoSearchOutline size={28} />
            </button>
          </div>
        </header>

        <section className="bg-slate-900 text-white my-5 rounded-lg scroll-none overflow-x-auto">
          {users.length === 0 && <Emptylist message="Sanaw boş" />}

          <table className="table-fixed w-full">
            <thead className="text-left bg-yellow-300 text-slate-900">
              <tr>
                <th className="w-16 px-5 py-2 rounded-tl-lg rounded-bl-lg">
                  ID
                </th>
                <th className="w-48 px-5 py-2">Ady</th>
                <th className="w-28 px-5 py-2">Telefon</th>
                <th className="w-16 px-5 py-2">Kody</th>
                <th className="w-28 px-5 py-2">Ýagdaýy</th>
                <th className="w-24 px-5 py-2">Görnüşi</th>
                <th className="w-32 px-5 py-2 rounded-tr-lg rounded-br-lg">
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
                      <td className="px-5 py-2 text-xs">
                        {statusByCode(user.confirm)}
                      </td>
                      <td className="px-5 py-2 text-xs">{user.type_name}</td>
                      <td className="px-5 py-2">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => userEditHandler(user)}
                            className="cursor-pointer w-10 h-10 mr-2 border border-blue-900 text-blue-500 hover:bg-blue-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                          >
                            <RiEdit2Fill size={18} />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              userDeleteHandler(user.id, user.name)
                            }
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
