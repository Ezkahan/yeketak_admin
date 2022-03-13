import Layout from "components/Layout/Layout";
import { NavLink } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import Title from "components/Title/Title";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import PageLoader from "../../components/Loader/PageLoader";
import SmallModal from "../../components/SmallModal/SmallModal";
import DeleteArtist from "./DeleteArtist";
import { getArtists } from "api/services/ArtistService";

const Artists = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [artistDelete, setArtistDelete] = useState({
    delete: false,
    artist: [],
  });

  const searchArtist = (e) => {
    setSearchTerm(e.target.value);
  };

  const loadArtists = () => {
    getArtists(page, searchTerm)
      .then((res) => {
        setArtists(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        console.log(err);
      });
  };

  const artistDeleteHandler = (artist) => {
    setArtistDelete({
      delete: !artistDelete.delete,
      artist: !artistDelete.delete ? artist : null,
    });

    loadArtists();
  };

  useEffect(() => {
    loadArtists();
  }, [page, searchTerm]);

  return (
    <>
      {isLoading > 0 && <PageLoader />}

      <SmallModal isOpen={artistDelete.delete}>
        <DeleteArtist
          artist={artistDelete.artist}
          artistDeleteHandler={artistDeleteHandler}
        />
      </SmallModal>

      <Layout>
        <header className="flex justify-between items-center">
          <div>
            <Title>
              <h1>Bagşylar</h1>
            </Title>
            <small>Jemi: {artists && artists.meta && artists.meta.total}</small>
          </div>

          <div className="bg-gray-900 w-6/12 xl:flex items-center justify-between rounded-xl overflow-hidden hidden">
            <input
              type="search"
              placeholder="Gözleg"
              onChange={searchArtist}
              className="bg-transparent p-3 pl-5 w-full"
            />
            <button className="text-yellow-300 p-1 rounded-xl m-2">
              <IoSearchOutline size={28} />
            </button>
          </div>

          <NavLink
            to={"/artist/add"}
            className={
              "bg-amber-300 hover:bg-amber-500 text-amber-900 duration-500 font-montserrat-bold rounded-lg px-4 py-2"
            }
          >
            Bagşy goş
          </NavLink>
        </header>

        <section className="grid grid-cols-12 gap-5 my-10">
          {artists &&
            artists.data &&
            artists.data.map((artist, index) => {
              return (
                <colgroup
                  key={index}
                  className="flex justify-between items-center col-span-12 xl:col-span-6 relative duration-500 bg-slate-900 rounded-xl p-4"
                >
                  <aside className="flex items-center">
                    <img
                      className="h-24 object-cover rounded-xl hover:brightness-125 transform duration-500"
                      src={artist.image}
                      alt="slider"
                    />
                    <div className="flex flex-col px-4">
                      <h1 className="font-semibold mb-2">{artist.name}</h1>
                      <small className="text-yellow-500 mb-1">
                        Aýdymlar: {artist.music_total}
                      </small>
                      <small className="text-yellow-500 mb-1">
                        Klipler: {artist.video_total}
                      </small>
                    </div>
                  </aside>

                  <aside className="flex flex-col items-center">
                    <button
                      type="button"
                      // onClick={() => userEditHandler(user)}
                      className="cursor-pointer w-10 h-10 mr-2 border border-blue-900 text-blue-500 hover:bg-blue-500 hover:text-white duration-500 flex justify-center items-center rounded-xl mb-2"
                    >
                      <RiEdit2Fill size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => artistDeleteHandler(artist)}
                      className="cursor-pointer w-10 h-10 mr-2 border border-red-900 text-red-500 hover:bg-red-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                    >
                      <FaTrash size={16} />
                    </button>
                  </aside>
                </colgroup>
              );
            })}
        </section>
      </Layout>
    </>
  );
};

export default Artists;
