import useToggle from "hooks/useToggle";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { isOpen, toggle } = useToggle(true);

  const widthX = window.screen.width;

  return (
    <main className="flex font-varela">
      <section
        style={{ width: isOpen ? "300px" : "80px" }}
        className="duration-500"
      >
        <Sidebar isOpen={isOpen} toggle={toggle} />
      </section>
      <section
        style={{ width: isOpen ? `${widthX - 300}px` : `${widthX - 80}px` }}
        className={`p-5 overflow-hidden text-white duration-500`}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
