import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";

const Artists = () => {
  return (
    <Layout className="border">
      <section className="flex justify-between items-center">
        <h1> Artists page </h1>
        <NavLink
          to={"/artist/add"}
          className={"bg-slate-800 rounded-lg px-3 py-2"}
        >
          Bagşy goş
        </NavLink>
      </section>
    </Layout>
  );
};

export default Artists;
