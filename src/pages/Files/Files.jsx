import api from "common/config/api.service";
import Emptylist from "components/Emptylist/Emptylist";
import Layout from "components/Layout/Layout";
import Title from "components/Title/Title";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Footer from "components/Footer/Footer";
import PageLoader from "components/Loader/PageLoader";
import SmallModal from "components/SmallModal/SmallModal";
import DeleteFile from "./DeleteFile";
import { getFiles } from "api/services/FileService";

const Files = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [files, setFiles] = useState([]);
  const [fileDelete, setFileDelete] = useState({
    delete: false,
    slug: null,
  });

  const fileDeleteHandler = (slug) => {
    setFileDelete({
      delete: !fileDelete.delete,
      slug: !fileDelete.delete ? slug : null,
    });

    loadFiles();
  };

  const loadFiles = () => {
    getFiles(page)
      .then((res) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        setFiles(res.data);
      })
      .catch((err) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsLoading(true);

    loadFiles();
  }, [page]);

  return (
    <>
      {isLoading > 0 && <PageLoader />}

      <SmallModal isOpen={fileDelete.delete}>
        <DeleteFile
          slug={fileDelete.slug}
          fileDeleteHandler={fileDeleteHandler}
        />
      </SmallModal>

      <Layout>
        <header className="flex justify-between items-center">
          <div>
            <Title>
              <h1>Faýllar new</h1>
            </Title>
            <small>Jemi: {files && files.meta && files.meta.total}</small>
          </div>

          <div className="bg-gray-900 w-4/12 xl:flex items-center justify-between rounded-xl overflow-hidden hidden">
            <input
              type="search"
              placeholder="Gözleg"
              className="bg-transparent p-2 pl-5 w-full"
            />
            <button className="bg-yellow-300 hover:bg-yellow-500 duration-300 text-gray-900 p-1 rounded-xl m-2">
              <IoSearchOutline size={28} />
            </button>
          </div>

          <NavLink
            to={"/file/add"}
            className={
              "bg-amber-300 hover:bg-amber-500 duration-300 text-amber-900 font-montserrat-bold rounded-lg px-4 py-2"
            }
          >
            Faýl goş
          </NavLink>
        </header>

        <section className="grid grid-cols-12 gap-y-2 gap-x-5 my-7">
            {files &&
              files.data &&
              files.data.map((file, index) => {
                return (
                  <aside
                    key={index}
                    className="col-span-6 bg-slate-900 rounded-xl flex items-center justify-between overflow-hidden relative"
                  >
                    <NavLink
                      to={`/file/${file.slug}`}
                      className="w-full flex items-center p-1"
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-xl"
                        src={file.image}
                        alt="slider"
                      />
                      <article className="my-1 px-3">
                        <div className="font-semibold text-sm">{file.name}</div>
                        <div className="w-full text-xs truncate hover mt-1 text-gray-400">
                          {file.artist_name}
                        </div>
                      </article>
                    </NavLink>

                    <div className="flex items-center mr-2">
                      <NavLink
                        to={`/file/${file.slug}/edit`}
                        className="cursor-pointer w-10 h-10 mr-2 border border-blue-900 text-blue-500 hover:bg-blue-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                      >
                        <RiEdit2Fill size={18} />
                      </NavLink>
                      <button
                        type="button"
                        onClick={() => fileDeleteHandler(file.slug)}
                        className="cursor-pointer w-10 h-10 border border-red-900 text-red-500 hover:bg-red-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>
                  </aside>
                );
              })}

            {files.length === 0 && <Emptylist message="Sanaw boş" />}

            <Footer>
              <ReactPaginate
                previousClassName={"hidden"}
                nextClassName={"hidden"}
                breakLabel={"..."}
                breakClassName={
                  "bg-slate-900 page-link text-white hover:bg-yellow-300 md:inline-flex relative items-center m-1 text-sm rounded-3xl duration-500 border-2 border-yellow-900/80"
                }
                pageCount={files && files.meta && files.meta.last_page}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={(data) => setPage(data.selected + 1)}
                pageClassName={
                  "bg-slate-900 page-link text-white hover:bg-yellow-300 md:inline-flex relative items-center m-1 text-sm rounded-3xl duration-500 border-2 border-yellow-300"
                }
                containerClassName={
                  "font-montserrat-bold relative z-0 inline-flex justify-center rounded-md w-full"
                }
                activeClassName={
                  "bg-yellow-400 text-slate-900 border-yellow-300"
                }
              />
            </Footer>
        </section>
      </Layout>
    </>
  );
};

export default Files;
