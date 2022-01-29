import { NavLink } from "react-router-dom";
import {
  IoBusinessOutline,
  IoCogOutline,
  IoFileTrayOutline,
  IoHomeOutline,
  IoImagesOutline,
  IoStarOutline,
} from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <main
      className={`xl:bg-gray-900 bg-yellow-300 text-white fixed bottom-0 xl:bottom-5 xl:left-5 left-0 xl:top-5 right-0 px-4 ${
        isOpen ? "xl:w-72" : "w-20"
      } duration-1000 rounded-t-3xl xl:rounded-3xl backdrop-blur-md bg-opacity-80 overflow-y-hidden overflow-x-auto z-50`}
    >
      <header
        onClick={toggle}
        className="hidden xl:flex xl:flex-col text-2xl font-bold text-center p-4"
      >
        <p
          className={`absolute -translate-x-1 duration-700 ${
            isOpen ? "ml-8" : "translate-y-2"
          }`}
        >
          {isOpen ? "Yeketak.com" : <AiOutlineMenuUnfold size={24} />}
        </p>
      </header>

      <nav className="flex justify-around xl:flex-col xl:mt-10 py-2 xl:py-0">
        <NavLink
          to="/"
          className={`bg-slate-800 text-gray-400 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-3 xl:mb-2 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-3xl xl:rounded-xl relative overflow-hidden ${
            isOpen ? "px-5" : "flex justify-center items-center"
          }`}
        >
          <IoHomeOutline size={24} className={isOpen && "xl:mr-2"} />
          <p
            className={`absolute translate-x-8 ml-1 duration-700 hidden xl:block ${
              isOpen ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Esasy
          </p>
        </NavLink>

        <NavLink
          to="/files"
          className={`bg-slate-800 text-gray-400 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-3 xl:mb-2 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-3xl xl:rounded-xl relative overflow-hidden ${
            isOpen ? "px-5" : "flex justify-center items-center"
          }`}
        >
          <IoFileTrayOutline size={24} className={isOpen && "xl:mr-2"} />
          <p
            className={`absolute translate-x-8 ml-1 duration-700 hidden xl:block ${
              isOpen ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Faýllar
          </p>
        </NavLink>

        <NavLink
          to="/artists"
          className={`bg-slate-800 text-gray-400 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-3 xl:mb-2 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-3xl xl:rounded-xl relative overflow-hidden ${
            isOpen ? "px-5" : "flex justify-center items-center"
          }`}
        >
          <IoStarOutline size={24} className={isOpen && "xl:mr-2"} />
          <p
            className={`absolute translate-x-8 ml-1 duration-700 hidden xl:block ${
              isOpen ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Bagşylar
          </p>
        </NavLink>

        <NavLink
          to="/sliders"
          className={`bg-slate-800 text-gray-400 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-3 xl:mb-2 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-3xl xl:rounded-xl relative overflow-hidden ${
            isOpen ? "px-5" : "flex justify-center items-center"
          }`}
        >
          <IoImagesOutline size={24} className={isOpen && "xl:mr-2"} />
          <p
            className={`absolute translate-x-8 ml-1 duration-700 hidden xl:block ${
              isOpen ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Slaýderlar
          </p>
        </NavLink>

        <NavLink
          to="/markets"
          className={`bg-slate-800 text-gray-400 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-3 xl:mb-2 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-3xl xl:rounded-xl relative overflow-hidden ${
            isOpen ? "px-5" : "flex justify-center items-center"
          }`}
        >
          <IoBusinessOutline size={24} className={isOpen && "xl:mr-2"} />
          <p
            className={`absolute translate-x-8 ml-1 duration-700 hidden xl:block ${
              isOpen ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Marketlar
          </p>
        </NavLink>

        <NavLink
          to="/services"
          className={`bg-slate-800 text-gray-400 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-3 xl:mb-2 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-3xl xl:rounded-xl relative overflow-hidden ${
            isOpen ? "px-5" : "flex justify-center items-center"
          }`}
        >
          <IoCogOutline size={24} className={isOpen && "xl:mr-2"} />
          <p
            className={`absolute translate-x-8 ml-1 duration-700 hidden xl:block ${
              isOpen ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Hyzmatlar
          </p>
        </NavLink>
      </nav>
    </main>
  );
};

export default Sidebar;
