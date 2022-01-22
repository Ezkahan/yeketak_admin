import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex font-varela">
      <Sidebar />
      <section className="w-full p-5 text-white">{children}</section>
    </main>
  );
};

export default Layout;
