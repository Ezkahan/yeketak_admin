import { NavLink } from "react-router-dom";
import {
  IoBusinessOutline,
  IoCogOutline,
  IoFileTrayOutline,
  IoHomeOutline,
  IoImagesOutline,
  IoPeopleOutline,
  IoStarOutline,
} from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import LOGO from "../../assets/logo.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <main
      className={`bg-gray-800 text-white fixed bottom-0 xl:bottom-5 xl:left-5 left-0 xl:top-5 right-0 px-4 ${
        isOpen ? "xl:w-72" : "w-20"
      } duration-300 xl:rounded-2xl backdrop-blur bg-opacity-60 xl:bg-opacity-80 overflow-y-hidden overflow-x-auto z-40 xl:h-115`}
    >
      <header
        onClick={toggle}
        className="hidden xl:flex xl:flex-col items-center text-2xl font-bold text-center p-4"
      >
        <p
          className={`absolute -translate-x-1 duration-700 ${
            isOpen ? null : "translate-y-2"
          }`}
        >
          {isOpen ? (
            <img src={LOGO} alt="Yeketak" className="w-28" />
          ) : (
            <AiOutlineMenuUnfold size={24} />
          )}
        </p>
      </header>

      <nav className="flex justify-around xl:flex-col xl:mt-16 py-2 xl:py-0">
        <NavLink
          to="/"
          className={`text-gray-200 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-2 xl:mb-1 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-xl relative overflow-hidden ${
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
          className={`text-gray-200 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-2 xl:mb-1 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-xl relative overflow-hidden ${
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
          className={`text-gray-200 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-2 xl:mb-1 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-xl relative overflow-hidden ${
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
          className={`text-gray-200 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-2 xl:mb-1 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-xl relative overflow-hidden ${
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
          className={`text-gray-200 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-2 xl:mb-1 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-xl relative overflow-hidden ${
            isOpen ? "px-5" : "flex justify-center items-center"
          }`}
        >
          <IoBusinessOutline size={24} className={isOpen && "xl:mr-2"} />
          <p
            className={`absolute translate-x-8 ml-1 duration-700 hidden xl:block ${
              isOpen ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Magazinlar
          </p>
        </NavLink>

        <NavLink
          to="/services"
          className={`text-gray-200 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-2 xl:mb-1 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-xl relative overflow-hidden ${
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

        <NavLink
          to="/users"
          className={`text-gray-200 hover:bg-yellow-300 hover:text-gray-900 duration-300 py-2 xl:mb-1 w-16 h-16 xl:w-auto xl:h-auto flex items-center rounded-xl relative overflow-hidden ${
            isOpen ? "px-5" : "flex justify-center items-center"
          }`}
        >
          <IoPeopleOutline size={24} className={isOpen && "xl:mr-2"} />
          <p
            className={`absolute translate-x-8 ml-1 duration-700 hidden xl:block ${
              isOpen ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Agzalar
          </p>
        </NavLink>
      </nav>
    </main>
  );
};

export default Sidebar;
