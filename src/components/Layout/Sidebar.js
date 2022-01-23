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
      className={`bg-gray-900 text-white h-screen px-4 w-full duration-500`}
    >
      <nav
        onClick={toggle}
        className="flex flex-col text-2xl font-bold text-center p-4"
      >
        {isOpen ? "Yeketak.com" : <AiOutlineMenuUnfold size={24} />}
      </nav>
      <NavLink
        to="/"
        className={`bg-slate-800 text-gray-400 font-bold py-2.5 mb-2 flex items-center rounded-lg ${
          isOpen ? "px-5" : "flex justify-center items-center"
        }`}
      >
        <IoHomeOutline size={24} className={isOpen && "mr-2"} />{" "}
        {isOpen && "Esasy"}
      </NavLink>
      <NavLink
        to="/files"
        className={`bg-slate-800 text-gray-400 font-bold py-2.5 mb-2 flex items-center rounded-lg ${
          isOpen ? "px-5" : "flex justify-center items-center"
        }`}
      >
        <IoFileTrayOutline size={24} className={isOpen && "mr-2"} />{" "}
        {isOpen && "Faýllar"}
      </NavLink>
      <NavLink
        to="/artists"
        className={`bg-slate-800 text-gray-400 font-bold py-2.5 mb-2 flex items-center rounded-lg ${
          isOpen ? "px-5" : "flex justify-center items-center"
        }`}
      >
        <IoStarOutline size={24} className={isOpen && "mr-2"} />{" "}
        {isOpen && "Bagşylar"}
      </NavLink>
      <NavLink
        to="/sliders"
        className={`bg-slate-800 text-gray-400 font-bold py-2.5 mb-2 flex items-center rounded-lg ${
          isOpen ? "px-5" : "flex justify-center items-center"
        }`}
      >
        <IoImagesOutline size={24} className={isOpen && "mr-2"} />{" "}
        {isOpen && "Slaýderlar"}
      </NavLink>
      <NavLink
        to="/markets"
        className={`bg-slate-800 text-gray-400 font-bold py-2.5 mb-2 flex items-center rounded-lg ${
          isOpen ? "px-5" : "flex justify-center items-center"
        }`}
      >
        <IoBusinessOutline size={24} className={isOpen && "mr-2"} />{" "}
        {isOpen && "Marketlar"}
      </NavLink>
      <NavLink
        to="/services"
        className={`bg-slate-800 text-gray-400 font-bold py-2.5 mb-2 flex items-center rounded-lg ${
          isOpen ? "px-5" : "flex justify-center items-center"
        }`}
      >
        <IoCogOutline size={24} className={isOpen && "mr-2"} />{" "}
        {isOpen && "Hyzmatlar"}
      </NavLink>
    </main>
  );
};

export default Sidebar;
