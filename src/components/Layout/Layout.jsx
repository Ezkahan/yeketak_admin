import useToggle from "hooks/useToggle";
import Sidebar from "./Sidebar";

const Layout = ({ children, className }) => {
  const { isOpen, toggle } = useToggle(true);

  return (
    <main className="flex font-montserrat-medium pb-12 my-2 xl:pb-0 select-none overflow-x-hidden">
      <nav>
        <Sidebar isOpen={isOpen} toggle={toggle} />
      </nav>
      <section
        className={`${
          isOpen ? "xl:ml-80" : "xl:ml-28"
        } ${className} p-5 xl:my-4 xl:mr-5 overflow-hidden text-white duration-700 w-full`}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
