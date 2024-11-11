import { Routes, Route } from "react-router-dom";
import Error from '../error/error.jsx';
import matriculasData from '../../../../informacionBDD/matriculados.json';
import Listado from "../../menuPrincipal/listado/Listado.jsx";

const Rutas = () => { 
  
  
    return (
    <>
     <Routes>
        {/* <Route path='/peliculas' element={<Peliculas listado={matriculasData.discentes} />}>
            <Route path='interpretes' element={<PeliculasInterprete />}/>
            <Route path='director' element={<PeliculasDirector />}/>
            <Route path='titulo' element={<PeliculasTitulo />}/>
          </Route> */}
          <Route path='/Listado' element={<Listado />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
);
};

export default Rutas;