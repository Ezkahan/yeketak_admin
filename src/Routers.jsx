import Index from "pages/Index";
import Login from "pages/Auth/Login";
import { Route, Routes } from "react-router-dom";
import Files from "pages/Files/Files";
import AddFile from "pages/Files/AddFile";
import Artists from "pages/Artists/Artists";
import AddArtist from "pages/Artists/AddArtist";
import EditFile from "pages/Files/EditFile";
import EditArtist from "pages/Artists/EditArtist";
import Page404 from "pages/404";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/files" element={<Files />} />
      <Route path="/file/add" element={<AddFile />} />
      <Route path="/file/:id/edit" element={<EditFile />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artist/add" element={<AddArtist />} />
      <Route path="/artist/:id/edit" element={<EditArtist />} />

      {/* 404 hemise asakda durmaly bolmasa error berya */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routers;
