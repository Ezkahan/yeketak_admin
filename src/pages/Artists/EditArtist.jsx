import Layout from "components/Layout/Layout";
import { useParams } from "react-router-dom";

const EditArtist = () => {
  const { id } = useParams();

  return (
    <Layout className="border">
      <h1> EditArtist page {id} </h1>
    </Layout>
  );
};

export default EditArtist;
