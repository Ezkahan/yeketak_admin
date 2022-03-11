import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "components/Layout/Layout";
import { showMarket } from "api/services/MarketService";
import Title from "components/Title/Title";
import Emptylist from "components/Emptylist/Emptylist";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import PageLoader from "components/Loader/PageLoader";
import SmallModal from "components/SmallModal/SmallModal";
import DeleteMarketImage from "./DeleteMarketImage";
import EditMarketImage from "./EditMarketImage";

const MarketShow = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [market, setMarket] = useState([]);
  const [images, setImages] = useState([]);
  const [marketImageEdit, setMarketImageEdit] = useState({
    edit: false,
    image: [],
  });
  const [marketImageDelete, setMarketImageDelete] = useState({
    delete: false,
    image: null,
  });

  const loadMarket = () => {
    showMarket(id)
      .then((res) => {
        setMarket(res.data.market);
        setImages(res.data.images);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  const marketImageEditHandler = (image) => {
    setMarketImageEdit({
      edit: !marketImageEdit.edit,
      image: !marketImageEdit.edit ? image : [],
    });

    loadMarket();
  };

  const marketImageDeleteHandler = (image) => {
    setMarketImageDelete({
      delete: !marketImageDelete.delete,
      image: !marketImageDelete.delete ? image : null,
    });
    loadMarket();
  };

  useEffect(() => {
    loadMarket();
  }, []);

  return (
    <>
      {isLoading > 0 && <PageLoader />}

      <SmallModal isOpen={marketImageDelete.delete}>
        <DeleteMarketImage
          image={marketImageDelete.image}
          marketImageDeleteHandler={marketImageDeleteHandler}
        />
      </SmallModal>

      <SmallModal isOpen={marketImageEdit.edit}>
        <EditMarketImage
          image={marketImageEdit.image}
          marketImageEditHandler={marketImageEditHandler}
        />
      </SmallModal>

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
                  <aside
                    key={index}
                    className="flex flex-col col-span-6 lg:col-span-4 relative"
                  >
                    <div className="absolute top-3 right-3 z-30">
                      <button
                        type="button"
                        onClick={() => marketImageEditHandler(image)}
                        className="bg-blue-500 bg-opacity-80 backdrop-blur w-10 h-10 mb-2 rounded-full flex items-center justify-center hover:bg-opacity-100 duration-500 cursor-pointer"
                      >
                        <FaPencilAlt size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => marketImageDeleteHandler(image)}
                        className="bg-red-500 bg-opacity-80 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-100 duration-500 cursor-pointer"
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                    <img
                      className="rounded-lg h-60 object-cover z-20"
                      key={index}
                      src={image.image}
                      alt={image.id}
                    />
                    <div
                      className={`bg-slate-800 p-3 rounded-lg pt-8 -translate-y-5 ${
                        image.confirm
                          ? "border-b-2 border-green-500"
                          : "border-b-2 border-red-500"
                      }`}
                    >
                      <h1 className="text-md"> {image.name} </h1>
                      <p className="text-sm text-green-500">
                        {image.price} TMT
                      </p>
                      <small className="text-xs"> {image.description} </small>
                    </div>
                  </aside>
                );
              })}
          </main>
        </section>
      </Layout>
    </>
  );
};

export default MarketShow;
