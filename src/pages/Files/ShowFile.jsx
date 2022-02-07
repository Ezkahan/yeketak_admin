import Layout from "components/Layout/Layout";
import { useParams } from "react-router-dom";

const ShowFile = () => {
  const { slug } = useParams();

  return (
    <Layout>
      <h1> ShowFile page {slug} </h1>
    </Layout>
  );
};

export default ShowFile;
