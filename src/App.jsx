import './App.css';
// import Parrafico from './componentes/Parrafico.jsx';
// import Contadorico from './componentes/Contadorico.jsx';
// import Numericos from './componentes/Numericos.jsx';
import Peliculas from './componentes/ejercicio_2/Peliculas/Peliculas.jsx';
import peliculasData from './informacionBDD/peliculas.json';


const App = () => {
   /* <Numericos />
    <Parrafico />
    <Contadorico /> */
  return (
    <>
      <h1>Contenido dentro del contenedor</h1>
      <Peliculas listado={peliculasData.peliculas}/>
    </>
  );
};

export default App;
