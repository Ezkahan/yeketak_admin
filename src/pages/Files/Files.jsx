import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";

const Files = () => {
  return (
    <Layout className="border">
      <section className="flex justify-between items-center">
        <h1> Files page </h1>
        <NavLink
          to={"/file/add"}
          className={"bg-slate-800 rounded-lg px-3 py-2"}
        >
          Faýl goş
        </NavLink>
      </section>
    </Layout>
  );
};

export default Files;
