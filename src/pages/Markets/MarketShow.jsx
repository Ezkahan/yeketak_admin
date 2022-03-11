import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "components/Layout/Layout";
import { showMarket } from "api/services/MarketService";
import Title from "components/Title/Title";
import Emptylist from "components/Emptylist/Emptylist";

const MarketShow = () => {
  const { id } = useParams();
  const [market, setMarket] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    showMarket(id)
      .then((res) => {
        setMarket(res.data.market);
        setImages(res.data.images.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <header className="flex justify-between items-center">
        <div>
          <Title>
            <h1>{market && market.name}</h1>
          </Title>
          <small>Jemi haryt: {images.length}</small>
        </div>
      </header>

      <section className="bg-slate-900 p-5 my-5 rounded-lg">
        {images && images.length === 0 && <Emptylist message="Sanaw boş" />}
        <main className="grid grid-cols-12 gap-5">
          {images &&
            images.map((image, index) => {
              return (
                <aside className="rounded-lg">
                  <img key={index} src={image.image} alt={image.id} />
                </aside>
              );
            })}
        </main>
      </section>
    </Layout>
  );
};

export default MarketShow;
