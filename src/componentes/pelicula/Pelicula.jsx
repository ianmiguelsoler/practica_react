import Interprete from '../interprete/Interprete.jsx';
import './Pelicula.css';

const Pelicula = ({ nombre, director, cartelera, actores, children }) => {
  return (
    <div className="contenedorPelicula">
      <div className="encabezadoPelicula">
        <h2 className="tituloPelicula">{nombre}</h2>
        <p className="directorPelicula">
          <strong>Director:</strong> {director}
        </p>
      </div>
      <div className="imagen-resumen">
      <div className="imagenPelicula">
        <img src={cartelera} alt={`Cartel de la película ${nombre}`} />
      </div>
      <div className="resumenPelicula">
        <h3>Resumen:</h3>
        <p>{children}</p>
      </div>
      </div>
      <div className="elencoPelicula">
        <h3>Elenco:</h3>
        {actores.map((actor, id) => (
          <Interprete 
          key={id} 
          nombre={actor.nombre} 
          imagen={actor.imagen}>
            {actor.biografia}
          </Interprete>
        ))}
      </div>
    </div>
  );
};

export default Pelicula;