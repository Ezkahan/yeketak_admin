import useToggle from "hooks/useToggle";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { isOpen, toggle } = useToggle(true);

  return (
    <main className="flex font-montserrat-medium">
      <nav>
        <Sidebar isOpen={isOpen} toggle={toggle} />
      </nav>
      <section
        className={`${
          isOpen ? "xl:ml-80" : "xl:ml-28"
        } p-5 xl:my-4 xl:mr-5 overflow-hidden text-white duration-700 w-full`}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
