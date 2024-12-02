import './App.css';
import React, { useState } from "react";
import Contenedor from './componentes/ejercicio_4/app/contenedor/Contenedor.jsx';
import DiscoFormulario from './componentes/ejercicio_4/menuPrincipal/discosFormulario/DiscoFormulario.jsx';
import ListaStarWarsApi from './componentes/ejercicio_4/menuPrincipal/StarWarsViews/main/ListaStarWarsApi.jsx';
const App = () => {

  return (
    <>
      <Contenedor>
          {/* <DiscoFormulario/> */}
          <ListaStarWarsApi />
      </Contenedor>
    </>
  );
};

export default App;
