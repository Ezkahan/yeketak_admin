import { IoTrashOutline } from "react-icons/io5";
import { editUser } from "api/services/UserService";
import { useState } from "react";

const EditUser = ({ user, userEditHandler }) => {
  const [userData, setUserData] = useState(user ?? []);
  const onChange = (e) => {
    e.preventDefault();

    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const userEdit = () => {
    editUser(userData)
      .then((res) => {
        userEditHandler(null);
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
          Agzany maglumatlaryny üýtgetmek
        </h1>
        <small className="text-sm block py-3">
          Agza ady:
          <strong className="font-montserrat-bold text-yellow-600 ml-2">
            {user.name}
          </strong>
        </small>
      </header>

      <main className="py-5">
        <form onChange={onChange} className="grid grid-cols-12 gap-8">
          <div className="relative col-span-12 border border-slate-200 group bg-slate-100 rounded-lg">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 ${
                userData.name &&
                userData.name.length &&
                "-translate-y-7 text-yellow-500"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
            >
              Agza ady
            </div>
            <input
              name="name"
              type="text"
              value={userData.name}
              className="bg-transparent p-3 w-full"
            />
          </div>

          <div className="relative col-span-12 border border-slate-200 group bg-slate-100 rounded-lg">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 ${
                userData.phone &&
                userData.phone.length &&
                "-translate-y-7 text-yellow-500"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
            >
              Agza telefony
            </div>
            <input
              name="phone"
              type="text"
              value={userData.phone}
              className="bg-transparent p-3 w-full"
            />
          </div>

          <div className="relative col-span-12">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 transform -translate-y-7 rounded-lg duration-500 text-yellow-500`}
            >
              Agza görnüşi
            </div>
            <select
              name="type"
              className="bg-slate-100 border border-slate-200 group rounded-lg w-full px-5 py-3 appearance-none"
            >
              <option
                selected={userData && userData.type === "market"}
                value="market"
              >
                Magazin
              </option>
              <option
                selected={userData && userData.type === "service"}
                value="service"
              >
                Hyzmat
              </option>
              <option
                selected={userData && userData.type === "singler"}
                value="singler"
              >
                Bagşy
              </option>

              <option
                selected={userData && userData.type === "user"}
                value="user"
              >
                Agza
              </option>
            </select>
          </div>

          <div className="relative col-span-12">
            <div
              className={`bg-slate-100 absolute left-3 top-3 px-2 transform -translate-y-7 rounded-lg duration-500 text-yellow-500`}
            >
              Agza ýagdaýy
            </div>
            <select
              name="confirm"
              className="bg-slate-100 border border-slate-200 group rounded-lg w-full px-5 py-3 appearance-none"
            >
              <option selected={userData && userData.confirm === 0} value="0">
                Tassyklanmadyk
              </option>
              <option selected={userData && userData.confirm === 1} value="1">
                Tassyklanan
              </option>
            </select>
          </div>
        </form>
      </main>

      <footer className="flex items-center justify-between">
        <button
          onClick={userEdit}
          className="bg-green-500 hover:bg-green-700 duration-300 text-green-100 px-5 py-2.5 rounded-lg flex items-center"
        >
          <IoTrashOutline size={20} className="mr-2" /> Ýatda sakla
        </button>
        <button
          onClick={() => userEditHandler(null)}
          className="border border-gray-300 hover:bg-gray-300 duration-300 text-slate-900 px-5 py-2.5 rounded-lg"
        >
          Bes et
        </button>
      </footer>
    </main>
  );
};

export default EditUser;
