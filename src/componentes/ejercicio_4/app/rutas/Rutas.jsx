import { Routes, Route } from "react-router-dom";
import Error from '../error/error.jsx';
import matriculasData from '../../../../informacionBDD/matriculados.json';
import Listado from "../../menuPrincipal/listado/Listado.jsx";
import Matricula from "../../menuPrincipal/matriculaComponente/Matricula/Matricula.jsx";

const Rutas = () => { 
  
  
    return (
    <>
     <Routes>
        <Route path='/matricula' element={<Matricula listado={matriculasData.discentes} />}/>
          <Route path='/Listado' element={<Listado />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
);
};

export default Rutas;