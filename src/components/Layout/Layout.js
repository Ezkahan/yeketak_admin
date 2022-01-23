import useToggle from "hooks/useToggle";
import Sidebar from "./Sidebar";
import useScreenSize from "use-screen-size";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const { isOpen, toggle, open, close } = useToggle(true);
  const { width } = useScreenSize();
  useEffect(() => {
    width <= 640 ? close() : open();
  }, [width]);

  return (
    <main className="flex font-varela">
      <section
        style={{ width: isOpen ? "300px" : "80px" }}
        className="duration-500"
      >
        <Sidebar isOpen={isOpen} toggle={toggle} />
      </section>
      <section
        style={{ width: isOpen ? `${width - 300}px` : `${width - 80}px` }}
        className={`p-5 overflow-hidden text-white duration-500`}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
