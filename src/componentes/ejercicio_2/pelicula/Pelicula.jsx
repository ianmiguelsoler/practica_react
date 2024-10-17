import Interpretes from '../interpretes/Interpretes.jsx';
import Taquilla from '../taquilla/Taquilla.jsx';
import './Pelicula.css';

const Pelicula = (props) => {
  const { nombre, cartelera, director, actores, children } = props;
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
        <div className="elencoTaquillaDiv">
        <h3>Elenco:</h3>
          <Taquilla />
          </div>
          <Interpretes interpretes={actores} />
      </div>
    </div>
  );
};

export default Pelicula;