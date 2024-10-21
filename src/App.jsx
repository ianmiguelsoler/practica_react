import './App.css';
import Peliculas from './componentes/ejercicio_3/Peliculas/Peliculas.jsx';
import peliculasData from './informacionBDD/peliculas.json';
import Inicio from './componentes/ejercicio_3/Inicio/Inicio.jsx';
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
    <h1>¡Bienvenido/a a React!</h1>
    <Menu />
    <Contenedor>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/acerca-de' element={<AcercaDe />} />
        <Route
          path='/peliculas'
          element={<Peliculas listado={peliculasData.peliculas} />}
        />
        <Route path='/contacto' element={<Contacto />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </Contenedor>
  </>
  );
};

export default App;
