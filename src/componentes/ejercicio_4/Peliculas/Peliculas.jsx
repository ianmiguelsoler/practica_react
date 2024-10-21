import Pelicula from '../pelicula/Pelicula.jsx';
import { generarUuidAleatorio } from "../../../biblioteca/biblioteca.js";

const Peliculas = (props) => {
  const { listado } = props;
  return (
    <>
    <div className="peliculasDiv">
    {listado.length
          ? listado.map((pelicula) => {
              return (
                <Pelicula
                key={generarUuidAleatorio()}
                nombre={pelicula.nombre}
                cartelera={pelicula.cartelera}
                director={pelicula.director}
                actores={pelicula.actores}
                recaudacion={pelicula.recaudacion}
                >
                  {pelicula.resumen}
                </Pelicula>
              );
            })
          : (
        <p>No hay películas disponibles</p>
      )}
    </div>
    </>
  );
};

export default Peliculas;
