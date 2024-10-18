import './App.css';
import Peliculas from './componentes/ejercicio_2/Peliculas/Peliculas.jsx';
import peliculasData from './informacionBDD/peliculas.json';


const App = () => {

  return (
    <>
      <h1>Contenido dentro del contenedor</h1>
      {/* Pasamos el listado de peliculas para solo hacer una única peticion en este fichero y no en el resto */}
      <Peliculas listado={peliculasData.peliculas}/>
    </>
  );
};

export default App;
