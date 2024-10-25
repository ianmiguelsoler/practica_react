import { Routes, Route } from "react-router-dom";
import Galeria from '../../menuPrincipal/galeriaMain/galeria/Galeria.jsx';
import Error from '../error/error.jsx';
import Interpretes from '../../menuPrincipal/peliculasComponentes/interpretes/Interpretes.jsx';
import Inicio from '../../menuPrincipal/Inicio/Inicio.jsx';
import Peliculas from '../../menuPrincipal/peliculasComponentes/Peliculas/Peliculas.jsx';
import peliculasData from '../../../../informacionBDD/peliculas.json';
import PeliculasInterprete from '../../menuPrincipal/peliculasComponentes/submenu/PeliculasInterprete.jsx';
import PeliculasDirector from '../../menuPrincipal/peliculasComponentes/submenu/PeliculasDirector.jsx';
import PeliculasTitulo from '../../menuPrincipal/peliculasComponentes/submenu/PeliculasTitulo.jsx';
import AcercaDe from '../../menuPrincipal/acercaDe/AcercaDe.jsx';
import GaleriasInterprete from '../../menuPrincipal/galeriaMain/subMenuGaleria/GaleriasInterprete.jsx';
import GaleriasDirector from '../../menuPrincipal/galeriaMain/subMenuGaleria/GaleriasDirector.jsx';
import GaleriasTitulo from '../../menuPrincipal/galeriaMain/subMenuGaleria/GaleríasTitulo.jsx';
import {unirArray} from '../../../../biblioteca/biblioteca.js';

const Rutas = () => { 
  
  //Este array unido se envia a la biblioteca de funciones.
  const arrayUnido = unirArray(peliculasData.peliculas);
    return (
    <>
     <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/interpretes' element={<Interpretes interpretes={arrayUnido} />}/>
        <Route path='/peliculas' element={<Peliculas listado={peliculasData.peliculas} />}>
            <Route path='interpretes' element={<PeliculasInterprete />}/>
            <Route path='director' element={<PeliculasDirector />}/>
            <Route path='titulo' element={<PeliculasTitulo />}/>
          </Route>
        <Route path='/galeria' element={<Galeria galeria={peliculasData.peliculas} />}>
            <Route path='interpretes' element={<GaleriasInterprete />}/>
            <Route path='director' element={<GaleriasDirector />}/>
            <Route path='titulo' element={<GaleriasTitulo />}/>
        </Route>
        <Route path='/acerca-de' element={<AcercaDe />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </>
);
};

export default Rutas;