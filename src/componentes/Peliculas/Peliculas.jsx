import Pelicula from '../pelicula/Pelicula.jsx';
import peliculasData from '../../informacionBDD/peliculas.json'; 

const Peliculas = () => {
  return (
    <div className="peliculas">
      {peliculasData && peliculasData.peliculas && peliculasData.peliculas.length > 0 ? (
        peliculasData.peliculas.map((pelicula) => (
          <Pelicula
            key={pelicula.id}
            nombre={pelicula.nombre}
            director={pelicula.director}
            cartelera={pelicula.cartelera}
            actores={pelicula.actores}
          >
            {pelicula.resumen}
          </Pelicula>
        ))
      ) : (
        <p>No hay películas disponibles</p>
      )}
    </div>
  );
  
};

export default Peliculas;
