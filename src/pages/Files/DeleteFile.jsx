import { IoTrashOutline } from "react-icons/io5";
import { deleteFile } from "api/services/FileService";

const DeleteFile = ({ file, fileDeleteHandler }) => {
  const fileDelete = () => {
    deleteFile(file.slug)
      .then((res) => {
        fileDeleteHandler(null);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="flex flex-col justify-between h-full font-montserrat-medium">
      <header>
        <h1 className="text-xl font-montserrat-bold">
          Faýl pozmagy tassyklaň!
        </h1>
        <div className="flex flex-col py-3">
          <p className="flex mb-1">
            Faýl ady:
            <strong className="text-md text-yellow-600 ml-2">{`${file.name} - ${file.artist_name}`}</strong>
          </p>

          <p className="flex mb-1">
            Faýl görnüşi:
            <strong className="text-md text-yellow-600 ml-2">{`${file.type}`}</strong>
          </p>
        </div>
      </header>

      <footer className="flex items-center justify-between">
        <button
          onClick={fileDelete}
          className="bg-red-500 hover:bg-red-700 duration-300 text-red-100 px-5 py-2.5 rounded-lg flex items-center"
        >
          <IoTrashOutline size={20} className="mr-2" /> Poz
        </button>
        <button
          onClick={() => fileDeleteHandler(null)}
          className="border border-gray-300 hover:bg-gray-300 duration-300 text-slate-900 px-5 py-2.5 rounded-lg"
        >
          Bes et
        </button>
      </footer>
    </main>
  );
};

export default DeleteFile;
