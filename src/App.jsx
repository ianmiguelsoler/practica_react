import './App.css';
import React from "react";
import Contenedor from './componentes/ejercicio_4/app/contenedor/Contenedor.jsx';
import NasaApp from './componentes/ejercicio_4/menuPrincipal/NasaApp/NasaApp.jsx';
const App = () => {

  return (
    <>
      <Contenedor>
          {/* <DiscoFormulario/> */}
          <NasaApp />
      </Contenedor>
    </>
  );
};

export default App;
