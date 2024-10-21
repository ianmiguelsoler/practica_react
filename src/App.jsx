import './App.css';
import Peliculas from './componentes/ejercicio_3/Peliculas/Peliculas.jsx';
import Contenedor from './componentes/ejercicio_3/contenedor/Contenedor.jsx';
import peliculasData from './informacionBDD/peliculas.json';
import Inicio from './componentes/ejercicio_3/Inicio/Inicio.jsx';
import Menu from './componentes/ejercicio_3/menu/Menu.jsx';
import { Routes, Route } from "react-router-dom";
import Contacto from './componentes/ejercicio_3/contacto/contacto.jsx';
import Productos from './componentes/ejercicio_3/productos/Productos.jsx';
import AcercaDe from './componentes/ejercicio_3/acercaDe/AcercaDe.jsx';
import Error from './componentes/ejercicio_3/error/error.jsx';
const App = () => {

  return (
    <>
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
        <Route path='/productos' element={<Productos />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Contenedor>
  </>
  );
};

export default App;
