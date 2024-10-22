import './App.css';
import Peliculas from './componentes/ejercicio_4/Peliculas/Peliculas.jsx';
import Contenedor from './componentes/ejercicio_4/contenedor/Contenedor.jsx';
import peliculasData from './informacionBDD/peliculas.json';
import Inicio from './componentes/ejercicio_4/Inicio/Inicio.jsx';
import Menu from './componentes/ejercicio_4/menu/Menu.jsx';
import { Routes, Route } from "react-router-dom";
import Contacto from './componentes/ejercicio_4/contacto/contacto.jsx';
import Productos from './componentes/ejercicio_4/productos/Productos.jsx';
import AcercaDe from './componentes/ejercicio_4/acercaDe/AcercaDe.jsx';
import Error from './componentes/ejercicio_4/error/error.jsx';
import Interpretes from './componentes/ejercicio_4/interpretes/Interpretes.jsx';

const App = () => {
  //Esta función unifica los arrays de los actores en uno solo.
  const unirArray = (arraySinUnificar) => {
    // Usamos map para extraer los actores y flat para unificar todo en un solo array.
    const arrayUnificado = arraySinUnificar
      .map(pelicula => pelicula.actores)  // Obtenemos el array de actores de cada película.
      .flat();  // Unificamos todos los arrays en uno solo.
  
    return arrayUnificado;
  };
  
  //Este array unido se envia.
  const arrayUnido = unirArray(peliculasData.peliculas);
  
  return (
    <>
    <Menu />
    <Contenedor>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/interpretes' element={<Interpretes interpretes={arrayUnido} />} 
        />

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
