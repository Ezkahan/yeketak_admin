import api from "common/config/api.service";
import Cookies from "js-cookie";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const token = Cookies.get("yeketak_token");
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    api
      .post("login", formState)
      .then((res) =>
        Cookies.set("yeketak_token", res.data.token, { expires: 2 })
      )
      .catch((err) => console.log(err));
  };

  return (
    <section className="flex items-center justify-center h-screen">
      {token && <Navigate to="/" />}
      <main className="bg-slate-900 p-5 xl:px-10 rounded-2xl w-125 shadow-2xl shadow-gray-900">
        <header className="flex items-center justify-center mb-8">
          <svg
            className="w-10 h-10 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h1 className="font-montserrat-bold text-yellow-500 text-2xl mx-2">
            Hasaba gir
          </h1>
        </header>

        <form onSubmit={onSubmit} className="font-bold text-yellow-300">
          <div className="relative col-span-12 lg:col-span-6 border border-slate-800 mb-7 group bg-slate-800 rounded-lg">
            <div
              className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                formState.email.length && "-translate-y-7"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 group-focus-within:text-yellow-300 rounded-lg duration-500 text-gray-300`}
            >
              Email
            </div>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              className="bg-transparent p-3 w-full"
            />
          </div>

          <div className="relative col-span-12 lg:col-span-6 border border-slate-800 mb-7 group bg-slate-800 rounded-lg">
            <div
              className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                formState.password.length && "-translate-y-7"
              } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 group-focus-within:text-yellow-300 rounded-lg duration-500 text-gray-300`}
            >
              Açarsöz
            </div>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="bg-transparent p-3 w-full"
            />
          </div>

          <div className="text-center mb-5">
            <button className="bg-yellow-500 text-gray-900 font-montserrat-bold text-lg px-6 py-2 rounded-lg">
              Hasaba gir
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Login;
