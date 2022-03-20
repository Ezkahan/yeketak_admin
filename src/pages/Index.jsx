import Layout from "components/Layout/Layout";
import Title from "components/Title/Title";

const Index = () => {
  return (
    <Layout>
      <section className="grid grid-cols-12 gap-5">
        {/* <aside className="col-span-12 xl:col-span-6">
          <Title> Täze faýllar </Title>
        </aside>

        <aside className="col-span-12 xl:col-span-6">
          <Title> Täze bagşylar </Title>
        </aside> */}

        <aside className="col-span-12 xl:col-span-6">
          <Title> Täze magazinlar </Title>
        </aside>

        <aside className="col-span-12 xl:col-span-6">
          <Title> Täze hyzmatlar </Title>
        </aside>
      </section>
    </Layout>
  );
};

export default Index;
