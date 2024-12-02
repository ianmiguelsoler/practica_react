import './App.css';
import React, { useState } from "react";
import Contenedor from './componentes/ejercicio_4/app/contenedor/Contenedor.jsx';
import DiscoFormulario from './componentes/ejercicio_4/menuPrincipal/discosFormulario/DiscoFormulario.jsx';
const App = () => {

  return (
    <>
      <Contenedor>
          <DiscoFormulario/>
      </Contenedor>
    </>
  );
};

export default App;
