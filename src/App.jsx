import './App.css';
import React from "react";
import Contenedor from './componentes/ejercicio_4/app/contenedor/Contenedor.jsx';
import ListaStarWarsApi from './componentes/ejercicio_4/menuPrincipal/StarWarsViews/main/ListaStarWarsApi.jsx';
const App = () => {

  return (
    <>
      <Contenedor>
          <ProveedorApiStarWars>
            <ListaStarWarsApi/>
          </ProveedorApiStarWars>
      </Contenedor>
    </>
  );
};

export default App;
