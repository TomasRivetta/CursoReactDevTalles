import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { MarvelPage, DcPage, HeroPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          {/*Search, Hero by id*/}
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />

          {/* Esto se realiza en caso de que cuando se busque una ruta que no existe a donde queremos que se mande o bien puede ser la ruta para nuestro home */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
