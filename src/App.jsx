import './App.css';
import React, { useState } from "react";
import Contenedor from './componentes/ejercicio_4/app/contenedor/Contenedor.jsx';
import PieDePagina from './componentes/ejercicio_4/app/pieDePagina/PieDePagina.jsx';
import Contenido from './componentes/ejercicio_4/app/contenido/Contenido.jsx';
import Cabecera from './componentes/ejercicio_4/app/cabecera/Cabecera.jsx';
import DiscoFormulario from './componentes/ejercicio_4/menuPrincipal/discosFormulario/DiscoFormulario.jsx';
const App = () => {

  return (
    <>
      <Contenedor>
        <Cabecera>Esto es la Cabecera</Cabecera>
        <Contenido>
          <DiscoFormulario/>
        </Contenido>
        <PieDePagina>Esto es el Pie de Página</PieDePagina>
      </Contenedor>
    </>
  );
};

export default App;
