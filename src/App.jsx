import './App.css';
import React from "react";
import ListaStarWarsApi from './componentes/Ejercicio 6/menuPrincipal/StarWarsViews/main/ListaStarWarsApi.jsx';
import ProveedorApiStarWars from './componentes/Ejercicio 6/menuPrincipal/StarWarsViews/ContextoStarWars/ProveedorApiStarWars.jsx';
const App = () => {

  return (
    <>
      <ProveedorApiStarWars>
        <ListaStarWarsApi/>
      </ProveedorApiStarWars>
    </>
  );
};

export default App;
