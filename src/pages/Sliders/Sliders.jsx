import Layout from "components/Layout/Layout";
import { FaTrash } from "react-icons/fa";
import Title from "components/Title/Title";
import { useEffect, useState } from "react";
import api from "common/config/api.service";
import SmallModal from "components/SmallModal/SmallModal";
import DeleteSlider from "./DeleteSlider";
import AddSlider from "./AddSlider";
import Modal from "components/Modal/Modal";
import PageLoader from "components/Loader/PageLoader";

const Sliders = () => {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sliderAdd, setSliderAdd] = useState(false);
  const [sliderDelete, setSliderDelete] = useState({
    delete: false,
    id: null,
  });

  const sliderDeleteHandler = (id) => {
    setSliderDelete({
      delete: !sliderDelete.delete,
      id: !sliderDelete.delete ? id : null,
    });

    getSlides();
  };

  const getSlides = () => {
    api
      .get("slides")
      .then((res) => {
        setSlides(res.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  const toggleSliderAdd = () => setSliderAdd(!sliderAdd);

  useEffect(() => {
    getSlides();
  }, []);

  return (
    <>
      {isLoading > 0 && <PageLoader />}

      <SmallModal isOpen={sliderDelete.delete}>
        <DeleteSlider
          id={sliderDelete.id}
          sliderDeleteHandler={sliderDeleteHandler}
        />
      </SmallModal>

      <Modal isOpen={sliderAdd}>
        <AddSlider getSlides={getSlides} toggleSliderAdd={toggleSliderAdd} />
      </Modal>

      <Layout>
        <header className="flex justify-between items-center">
          <div>
            <Title>
              <h1>Slaýderlar</h1>
            </Title>
            <small>Jemi: {slides.length}</small>
          </div>

          <button
            type="button"
            onClick={toggleSliderAdd}
            className={
              "bg-amber-300 text-amber-900 font-montserrat-bold rounded-lg px-4 py-2"
            }
          >
            Slaýder goş
          </button>
        </header>

        <section className="grid grid-cols-12 gap-10 my-10">
          {slides.length > 0 &&
            slides.map((slide, index) => {
              return (
                <aside
                  key={index}
                  className="col-span-12 lg:col-span-4 relative bg-slate-900 rounded-3xl overflow-hidden"
                >
                  <img
                    className="w-full rounded-xl brightness-75 hover:brightness-125 transform duration-500"
                    src={slide.image}
                    alt="Slide"
                  />
                  <button
                    type="button"
                    onClick={() => sliderDeleteHandler(slide.id)}
                    className="bg-red-500 bg-opacity-90 backdrop-blur absolute top-3 right-3 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-100 duration-500 cursor-pointer"
                  >
                    <FaTrash size={20} />
                  </button>
                </aside>
              );
            })}
        </section>
      </Layout>
    </>
  );
};

export default Sliders;
