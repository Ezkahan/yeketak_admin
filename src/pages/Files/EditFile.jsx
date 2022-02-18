import Layout from "components/Layout/Layout";
import api from "common/config/api.service";
import Title from "components/Title/Title";
import { useEffect, useState } from "react";
import FileLoader from "components/Loader/FileLoader";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getFile } from "api/services/FileService";
import Modal from "components/Modal/Modal";
import ChangeFileImage from "./ChangeFileImage";

const EditFile = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [imageFormShow, setImageFormShow] = useState(false);
  const [artists, setArtists] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    artist_id: "",
    artist_name: "",
    music_author: "",
    word_author: "",
    image: "",
    file: "",
    type: "music",
    expires_day: "",
  });

  useEffect(() => {
    getFile(slug)
      .then((res) => {
        setFormState(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .get("all_artists")
      .then((res) => {
        setArtists(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const toggleImageForm = () => {
    setImageFormShow(!imageFormShow);
  };

  const imageChangeHandler = () => {
    toggleImageForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: formState.name,
      artist_id: formState.artist_id,
      artist_name: formState.artist_name,
      music_author: formState.music_author,
      word_author: formState.word_author,
      type: formState.type,
      expires_at: formState.expires_day,
    };

    api
      .put(`files/${slug}`, data, {
        onUploadProgress: (e) => {
          let progressCompleted = Math.round((e.loaded * 100) / e.total);
          setProgress(progressCompleted);
        },
      })
      .then((res) => {
        setTimeout(() => {
          navigate("/files");
        }, 1000);
        setProgress(0);
      })
      .catch((err) => setProgress(0));
  };

  return (
    <>
      {progress > 0 && <FileLoader percentage={progress} />}

      <Modal isOpen={imageFormShow}>
        <ChangeFileImage slug={slug} close={toggleImageForm} />
      </Modal>

      <Layout className="bg-gray-900 rounded-xl xl:px-10">
        <Title> Faýl üýtgetmek </Title>

        <section className="grid grid-cols-12 items-center gap-5">
          <aside className="col-span-12 lg:col-span-4 py-5">
            {
              <img
                onClick={imageChangeHandler}
                src={formState && formState.image}
                alt="image"
                className="rounded-xl shadow-xl shadow-slate-900"
              />
            }
          </aside>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-12 col-span-12 lg:col-span-8 gap-x-4 gap-y-7 xl:ml-5 my-10"
          >
            <div className="relative col-span-12 border border-slate-800 group bg-slate-800 rounded-lg">
              <div
                className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                  formState.name &&
                  formState.name.length &&
                  "-translate-y-7 text-yellow-500"
                } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
              >
                Faýl ady
              </div>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                value={formState.name}
                className="bg-transparent p-3 w-full"
              />
            </div>

            <div className="relative col-span-12 border border-slate-800 group bg-slate-800 rounded-lg">
              <div
                className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                  formState.artist_name &&
                  formState.artist_name.length &&
                  "-translate-y-7 text-yellow-500"
                } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
              >
                Bagşynyň ady
              </div>
              <input
                onChange={handleChange}
                name="artist_name"
                type="text"
                value={formState.artist_name}
                className="bg-transparent p-3 w-full"
              />
            </div>

            <div className="relative col-span-12 border border-slate-800 group bg-slate-800 rounded-lg">
              <div
                className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                  formState.music_author &&
                  formState.music_author.length &&
                  "-translate-y-7 text-yellow-500"
                } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
              >
                Awtory
              </div>
              <input
                onChange={handleChange}
                name="music_author"
                type="text"
                value={formState.music_author}
                className="bg-transparent p-3 w-full"
              />
            </div>

            <div className="relative col-span-12 border border-slate-800 group bg-slate-800 rounded-lg">
              <div
                className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                  formState.word_author &&
                  formState.word_author.length &&
                  "-translate-y-7 text-yellow-500"
                } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
              >
                Sözi
              </div>
              <input
                onChange={handleChange}
                name="word_author"
                type="text"
                value={formState.word_author}
                className="bg-transparent p-3 w-full"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <select
                onChange={handleChange}
                name="type"
                className="bg-slate-800 border border-slate-800 group rounded-lg w-full px-5 py-3 appearance-none"
              >
                <option
                  selected={formState && formState.type === "mp3"}
                  value="mp3"
                >
                  Aýdym
                </option>
                <option
                  selected={formState && formState.type === "mp4"}
                  value="mp4"
                >
                  Klip
                </option>
              </select>
            </div>

            <div className="relative col-span-12 lg:col-span-6 border border-slate-800 group bg-slate-800 rounded-lg">
              <div
                className={`bg-slate-800 absolute left-3 top-3 px-2 ${
                  formState.expires_day && "-translate-y-7 text-yellow-500"
                } transform group-focus-within:-translate-y-7 group-hover:-translate-y-7 rounded-lg duration-500 group-focus-within:text-yellow-500 text-gray-300`}
              >
                Pozulmaly wagty (gün)
              </div>
              <input
                onChange={handleChange}
                name="expires_day"
                type="number"
                value={formState.expires_day}
                className="bg-transparent p-3 w-full"
              />
            </div>

            <div className="col-span-12">
              <select
                onChange={handleChange}
                name="artist_id"
                className="bg-slate-800 border border-slate-800 group rounded-lg w-full px-5 py-3 appearance-none"
              >
                <option value="0"> Ýok </option>
                {artists &&
                  artists.map((artist, index) => {
                    return (
                      <option
                        key={index}
                        value={artist.id}
                        selected={artist.id === formState.artist_id}
                      >
                        {artist.name}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="col-span-12 flex items-center justify-between">
              <button className="bg-yellow-300 hover:bg-yellow-500 duration-300 text-slate-900 px-5 py-2.5 w-42 font-montserrat-bold rounded-lg">
                Ýatda sakla
              </button>

              <NavLink
                to="/files"
                className="bg-slate-500 hover:bg-slate-700 duration-300 text-slate-200 px-5 py-2.5 w-32 font-montserrat-bold rounded-lg"
              >
                Yza dolan
              </NavLink>
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
};
export default EditFile;
