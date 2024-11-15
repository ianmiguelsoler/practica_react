import './App.css';
import React, { useState } from "react";
import Contenedor from './componentes/ejercicio_4/app/contenedor/Contenedor.jsx';
import PieDePagina from './componentes/ejercicio_4/app/pieDePagina/PieDePagina.jsx';
import Contenido from './componentes/ejercicio_4/app/contenido/Contenido.jsx';
import Cabecera from './componentes/ejercicio_4/app/cabecera/Cabecera.jsx';
import Localizador from './componentes/ejercicio_4/menuPrincipal/localizador/Localizador.jsx';
import Colorines from './componentes/ejercicio_4/menuPrincipal/colorines/Colorines.jsx';
import Contador from './componentes/ejercicio_4/menuPrincipal/contador/Contador.jsx';

const App = () => {
  const valorInicial = false;
  const [mostrarLocalizador, setMostrarLocalizador] = useState(valorInicial);
  const [mostrarColorines, setMostrarColorines] = useState(valorInicial);
  const [mostrarContador, setMostrarContador] = useState(valorInicial);
  // const [mostrar, setMostrar] = useState(valorInicial);

  return (
    <>
      <Contenedor>
        <Cabecera>Esto es la Cabecera</Cabecera>
        <Contenido>
          <button
            onClick={() => {
              setMostrarLocalizador(!mostrarLocalizador);
            }}
          >
            Montar/desmontar componente Localizador
          </button>
          <button
            onClick={() => {
              setMostrarColorines(!mostrarColorines);
            }}
          >
            Montar/desmontar componente Colorines
          </button>  
          <button
            onClick={() => {
              setMostrarContador(!mostrarContador);
            }}
          >
            Montar/desmontar componente Contador
          </button>
          {/* Controla si mostrar o desmontar el componente Localizador */}
          {mostrarLocalizador && <Localizador />}
          {mostrarColorines && <Colorines />}
          {mostrarContador && <Contador />}
        </Contenido>
        <PieDePagina>Esto es el Pie de Página</PieDePagina>
      </Contenedor>
    </>
  );
};

export default App;
