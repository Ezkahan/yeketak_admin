import { getFile } from "api/services/FileService";
import Layout from "components/Layout/Layout";
import { useEffect } from "react";
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";

const ShowFile = () => {
  const { slug } = useParams();
  const [file, setFile] = useState([]);

  useEffect(() => {
    getFile(slug).then((res) => setFile(res.data.data));
  }, []);

  return (
    <Layout className="bg-gray-900 rounded-xl xl:px-10">
      {file && (
        <section className="my-5">
          <main className="flex flex-col items-start">
            <h1 className="text-yellow-500 text-2xl">
              {file.artist_name + " - " + file.name}
            </h1>
            <aside className="flex items-start py-4">
              <img
                src={file.image}
                alt={file.name}
                className="h-56 rounded-xl my-3"
              />
              <table className="table w-full ml-5 my-3">
                <tbody>
                  <tr>
                    <td className="w-24 text-slate-400 p-1.5"> Ýüklenen: </td>
                    <td className="text-yellow-500 p-1.5">{file.downloaded}</td>
                  </tr>

                  <tr>
                    <td className="w-24 text-slate-400 p-1.5"> Halanan: </td>
                    <td className="text-yellow-500 p-1.5"> {file.like} </td>
                  </tr>

                  <tr>
                    <td className="w-24 text-slate-400 p-1.5"> Görlen: </td>
                    <td className="text-yellow-500 p-1.5"> {file.preview} </td>
                  </tr>

                  <tr>
                    <td className="w-24 text-slate-400 p-1.5"> Görnüşi: </td>
                    <td className="text-yellow-500 p-1.5"> {file.type} </td>
                  </tr>

                  <tr>
                    <td className="w-24 text-slate-400 p-1.5"> Ölçegi: </td>
                    <td className="text-yellow-500 p-1.5"> {file.size} </td>
                  </tr>

                  <tr>
                    <td className="w-24 text-slate-400 p-1.5"> Ýagdaýy: </td>
                    <td className="text-yellow-500 p-1.5">{file.status}</td>
                  </tr>
                </tbody>
              </table>
            </aside>

            <NavLink
              to="/files"
              className="flex items-center bg-slate-700 hover:bg-slate-800 text-slate-400 duration-300 px-6 py-3 rounded-lg"
            >
              <IoArrowUndoCircleOutline size={24} />
              <p className="mx-2"> Yza dolan </p>
            </NavLink>
          </main>
        </section>
      )}
    </Layout>
  );
};

export default ShowFile;
