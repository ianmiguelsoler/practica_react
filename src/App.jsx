import './App.css';
import React from "react";
import Contenedor from './componentes/ejercicio_4/app/contenedor/Contenedor.jsx';
import ListaStarWarsApi from './componentes/ejercicio_4/menuPrincipal/NasaApp/main/ListaStarWarsApi.js';
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
