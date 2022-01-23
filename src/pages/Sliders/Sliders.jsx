import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";

const Sliders = () => {
  return (
    <Layout className="border">
      <section className="flex justify-between items-center">
        <h1> Sliders page </h1>
        <NavLink
          to={"/slider/add"}
          className={"bg-slate-800 rounded-lg px-3 py-2"}
        >
          Slaýder goş
        </NavLink>
      </section>
    </Layout>
  );
};

export default Sliders;
