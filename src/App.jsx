import './App.css';
import React from "react";
import Contenedor from './componentes/ejercicio_4/app/contenedor/Contenedor.jsx';
import NasaApp from './componentes/ejercicio_4/menuPrincipal/NasaApp/NasaApp.jsx';
import NasaAppPlanetas from './componentes/ejercicio_4/menuPrincipal/NasaAppPlanetas/NasaAppPlanetas.jsx';
const App = () => {

  return (
    <>
      <Contenedor>
          {/* <DiscoFormulario/> */}
          {/* <NasaApp /> */}
          <NasaAppPlanetas />
      </Contenedor>
    </>
  );
};

export default App;
