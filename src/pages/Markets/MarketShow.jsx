import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "components/Layout/Layout";
import { showMarket, getMarketImages } from "api/services/MarketService";
import Title from "components/Title/Title";
import Emptylist from "components/Emptylist/Emptylist";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import PageLoader from "components/Loader/PageLoader";
import SmallModal from "components/SmallModal/SmallModal";
import DeleteMarketImage from "./DeleteMarketImage";
import EditMarketImage from "./EditMarketImage";
import ReactPaginate from "react-paginate";
import Footer from "components/Footer/Footer";

const MarketShow = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
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

  const loadMarketImages = () => {
    getMarketImages(id, page)
      .then((res) => {
        setImages(res.data);
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
    loadMarketImages();
  };

  const marketImageDeleteHandler = (image) => {
    setMarketImageDelete({
      delete: !marketImageDelete.delete,
      image: !marketImageDelete.delete ? image : null,
    });
    loadMarket();
    loadMarketImages();
  };

  useEffect(() => {
    loadMarket();
    loadMarketImages();
  }, [page]);

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
            <small>
              Jemi haryt: {images && images.meta && images.meta.total}
            </small>
          </div>
        </header>

        <section className="bg-slate-900 p-5 my-5 rounded-lg">
          {images && images.data && Object.keys(images.data).length === 0 && (
            <Emptylist message="Sanaw boş" />
          )}
          <main className="grid grid-cols-12 gap-5">
            {images &&
              images.data &&
              Object.keys(images.data).length &&
              images.data.map((image, index) => {
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

          <Footer>
            <ReactPaginate
              previousClassName={"hidden"}
              nextClassName={"hidden"}
              breakLabel={"..."}
              breakClassName={
                "bg-slate-900 page-link text-white hover:bg-yellow-300 md:inline-flex relative items-center m-1 text-sm rounded-3xl duration-500 border-2 border-yellow-900/80"
              }
              // pageCount={1}
              pageCount={images && images.meta && images.meta.last_page}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={(data) => setPage(data.selected + 1)}
              pageClassName={
                "bg-slate-900 page-link text-white hover:bg-yellow-300 md:inline-flex relative items-center m-1 text-sm rounded-3xl duration-500 border-2 border-yellow-300"
              }
              containerClassName={
                "font-montserrat-bold relative z-0 inline-flex justify-center rounded-md w-full"
              }
              activeClassName={"bg-yellow-400 text-slate-900 border-yellow-300"}
            />
          </Footer>
        </section>
      </Layout>
    </>
  );
};

export default MarketShow;
