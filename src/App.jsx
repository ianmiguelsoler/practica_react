import React, { useState } from "react";
import GaleriaNasa from "./componentes/menuPrincipal/GaleriaNasa/GaleriaNasa.jsx";
import FotoDiaNasa from "./componentes/menuPrincipal/GaleriaNasa/FotoDiaNasa/FotoDiaNasa.jsx";

const App = () => {
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  const manejarSeleccionFecha = (foto) => {
    setFotoSeleccionada(foto);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1>Galería de la NASA</h1>
      <FotoDiaNasa onSeleccionarFecha={manejarSeleccionFecha} />
      <GaleriaNasa />
    </div>
  );
};

export default App;
