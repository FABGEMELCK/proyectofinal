import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Acerca from "./Acerca";
import Contacto from "./Contacto";
import HtmlCheckOut from "./HtmlCheckOut";
// import Articulos from './Articulos';
import Inicio from "./Inicio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/checkout" element={<HtmlCheckOut />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}
export default App;
