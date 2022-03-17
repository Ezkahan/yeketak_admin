import Index from "pages/Index";
import Login from "pages/Auth/Login";
import { Route, Routes } from "react-router-dom";
import Files from "pages/Files/Files";
import AddFile from "pages/Files/AddFile";
import Artists from "pages/Artists/Artists";
import AddArtist from "pages/Artists/AddArtist";
import EditFile from "pages/Files/EditFile";
import ShowFile from "pages/Files/ShowFile";
import EditArtist from "pages/Artists/EditArtist";
import Page404 from "pages/404";
import Sliders from "pages/Sliders/Sliders";
import AddSliders from "pages/Sliders/AddSlider";
import Markets from "pages/Markets/Markets";
import Services from "pages/Services/Services";
import Users from "pages/Users/Users";
import MarketShow from "pages/Markets/MarketShow";
import ServiceShow from "pages/Services/ServiceShow";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/files" element={<Files />} />
      <Route path="/file/add" element={<AddFile />} />
      <Route path="/file/:slug/edit" element={<EditFile />} />
      <Route path="/file/:slug" element={<ShowFile />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artist/add" element={<AddArtist />} />
      <Route path="/artist/:id/edit" element={<EditArtist />} />
      <Route path="/sliders" element={<Sliders />} />
      <Route path="/slider/add" element={<AddSliders />} />

      <Route path="/markets" element={<Markets />} />
      <Route path="/market/:id" element={<MarketShow />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service/:id" element={<ServiceShow />} />
      <Route path="/users" element={<Users />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routers;
