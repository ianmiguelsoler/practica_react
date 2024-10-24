import { Routes, Route } from "react-router-dom";
import Galeria from '../../menuPrincipal/galeriaMain/galeria/Galeria.jsx';
import Error from '../error/error.jsx';
import Interpretes from '../../menuPrincipal/peliculasComponentes/interpretes/Interpretes.jsx';
import Inicio from '../../menuPrincipal/Inicio/Inicio.jsx';
import Peliculas from '../../menuPrincipal/peliculasComponentes/Peliculas/Peliculas.jsx';
import peliculasData from '../../../../informacionBDD/peliculas.json';
import PeliculasInterprete from '../../submenu/PeliculasInterprete.jsx';
import PeliculasDirector from '../../submenu/PeliculasDirector.jsx';
import PeliculasTitulo from '../../submenu/PeliculasTitulo.jsx';
import AcercaDe from '../../menuPrincipal/acercaDe/AcercaDe.jsx';


const Rutas = () => {
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
     <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/interpretes' element={<Interpretes interpretes={arrayUnido} />}/>
        <Route
          path='/peliculas'
          element={<Peliculas listado={peliculasData.peliculas} />}>
             <Route path='interpretes' element={<PeliculasInterprete />}/>
             <Route path='director' element={<PeliculasDirector />}/>
             <Route path='titulo' element={<PeliculasTitulo />}/>

          </Route>
        <Route path='/galeria' element={<Galeria galeria={peliculasData.peliculas} />} />
        <Route path='/acerca-de' element={<AcercaDe />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </>
);
};

export default Rutas;