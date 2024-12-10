import React from "react";
import SeleccionNasa from "./componentes/menuPrincipal/SeleccionPrincipal/SeleccionPrincipal.jsx";
import Contenedor from "./componentes/app/contenedor/Contenedor.jsx"

const App = () => {
  return (
    <>
      <Contenedor>
        <SeleccionNasa />
      </Contenedor>
    </>
  );
};

export default App;
