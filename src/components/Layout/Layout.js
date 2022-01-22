import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full">{children}</section>
    </main>
  );
};

export default Layout;
