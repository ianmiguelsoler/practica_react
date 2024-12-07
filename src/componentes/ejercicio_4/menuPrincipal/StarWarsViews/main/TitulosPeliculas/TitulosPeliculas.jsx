import TituloPelicula from "./TituloPelicula/TituloPelicula.jsx";
import { generarUuidAleatorio } from "../../../../../../biblioteca/biblioteca.js";

const TitulosPeliculas = ({ peliculas, manejarClickPelicula }) => {
  return (
    <>
    <div>
      <h2>Películas de Star Wars</h2>
      {peliculas.length && Array.isArray(peliculas) ? (
        peliculas.map((peli, index) => (
          <TituloPelicula
            key={generarUuidAleatorio()}
            pelicula={peli}
            manejarClickPelicula={() => manejarClickPelicula(index + 1)}
          />
        ))
      ) : (
        `No se encontraron películas en la base de datos.`
      )}
    </div>
    </>
  );
};

export default TitulosPeliculas;
