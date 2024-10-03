import Pelicula from '../pelicula/Pelicula.jsx';
import peliculasData from '../../informacionBDD/peliculas.json'; 

const Peliculas = () => {
  return (
    <div className="peliculas">
      {peliculasData.peliculas.map((pelicula) => (
        <Pelicula
          key={pelicula.id}
          nombre={pelicula.nombre}
          director={pelicula.director}
          cartelera={pelicula.cartelera}
          actores={pelicula.actores}
        >
          {pelicula.resumen}
        </Pelicula>
      ))}
    </div>
  );
};

export default Peliculas;
