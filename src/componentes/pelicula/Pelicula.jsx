import './Pelicula.css';
import Interprete from './componentes/interprete/Interprete.jsx';
import Contenedor from './componentes/contenedor/Contenedor.jsx';

const Pelicula = ( props ) => {
    const { titulo, direccion, cartelera, nombre,  children } = props.datos;
  return (
    <>
    <Contenedor>
    <div className="pelicula-titulo">
        <div>
            <h1>{titulo}</h1>
            <p>{direccion}</p>
        </div>
    </div>
    <div className="pelicula-cartelera-resumen">
        <div className="pelicula-cartelera">
            <img src={cartelera} alt={`Cartel de ${titulo}`} />
        </div>
        <div className="pelicula-resumen">
            <span>{children}</span>
        </div>
    </div>
    <Interprete
        
    >

    </Interprete>
    </Contenedor>
    </>
  );
};

export default Pelicula;