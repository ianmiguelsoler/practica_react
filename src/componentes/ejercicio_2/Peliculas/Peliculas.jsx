import Pelicula from '../pelicula/Pelicula.jsx';
import peliculasData from '../../../informacionBDD/peliculas.json'; 

const Peliculas = (props) => {
  const { listado } = props;
  return (
    <>
    <div className="peliculas">
      {listado && listado.peliculas && listado.peliculas.length > 0 ? (
        listado.peliculas.map((pelicula) => (
          <Pelicula
            key={pelicula.id}
            nombre={pelicula.nombre}
            cartelera={pelicula.cartelera}
            director={pelicula.director}
            actores={pelicula.actores}
          >
            {pelicula.resumen}
          </Pelicula>
        ))
      ) : (
        <p>No hay películas disponibles</p>
      )}
    </div>
    </>
  );
  
};

export default Peliculas;
