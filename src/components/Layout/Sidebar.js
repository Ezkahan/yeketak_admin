import { NavLink } from "react-router-dom";
import {
  IoBusinessOutline,
  IoCogOutline,
  IoFileTrayOutline,
  IoHomeOutline,
  IoImagesOutline,
  IoStarOutline,
} from "react-icons/io5";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <main
      className={`bg-gray-900 text-white h-screen px-4 w-full duration-500`}
    >
      <nav
        onClick={toggle}
        className="flex flex-col text-2xl font-bold text-center p-4"
      >
        Yeketak.com
      </nav>
      <NavLink
        to="/"
        className="bg-slate-800 text-gray-400 font-bold px-5 py-2.5 mb-2 flex items-center rounded-lg"
      >
        <IoHomeOutline size={24} className="mr-2" /> {isOpen && "Esasy"}
      </NavLink>
      <NavLink
        to="/files"
        className="bg-slate-800 text-gray-400 font-bold px-5 py-2.5 mb-2 flex items-center rounded-lg"
      >
        <IoFileTrayOutline size={24} className="mr-2" /> {isOpen && "Faýllar"}
      </NavLink>
      <NavLink
        to="/artists"
        className="bg-slate-800 text-gray-400 font-bold px-5 py-2.5 mb-2 flex items-center rounded-lg"
      >
        <IoStarOutline size={24} className="mr-2" /> {isOpen && "Bagşylar"}
      </NavLink>
      <NavLink
        to="/sliders"
        className="bg-slate-800 text-gray-400 font-bold px-5 py-2.5 mb-2 flex items-center rounded-lg"
      >
        <IoImagesOutline size={24} className="mr-2" /> {isOpen && "Slaýderlar"}
      </NavLink>
      <NavLink
        to="/markets"
        className="bg-slate-800 text-gray-400 font-bold px-5 py-2.5 mb-2 flex items-center rounded-lg"
      >
        <IoBusinessOutline size={24} className="mr-2" /> {isOpen && "Marketlar"}
      </NavLink>
      <NavLink
        to="/services"
        className="bg-slate-800 text-gray-400 font-bold px-5 py-2.5 mb-2 flex items-center rounded-lg"
      >
        <IoCogOutline size={24} className="mr-2" /> {isOpen && "Hyzmatlar"}
      </NavLink>
    </main>
  );
};

export default Sidebar;
