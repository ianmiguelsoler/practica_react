import { useContext } from "react";
import "./ListaStarWarsApi.css";
import TitulosPeliculas from "./TitulosPeliculas/TitulosPeliculas.jsx";
import DatosPelicula from "./DatosPeliculas/DatosPeliculas.jsx";
import { contextoPeliculas } from "../ContextoStarWars/ProveedorApiStarWars.jsx";

const ListaStarWarsApi = () => {
  // Importamos y usamos las variables hechas en el contexto.
  const { listaPelis, errores, peliculaSeleccionada, manejarClickPelicula } =
    useContext(contextoPeliculas);
  return (
    <div id="contenedor">
      <h1 id="encabezado">Películas de Star Wars</h1>
      {errores ? (
        <p className="error">{errores}</p>
      ) : (
        <div id="contenido">
          <div id="peliculas">
            <TitulosPeliculas
              peliculas={listaPelis}
              manejarClickPelicula={manejarClickPelicula}
            />
          </div>
          <div id="informacion">
            {peliculaSeleccionada && (
              <DatosPelicula pelicula={peliculaSeleccionada} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaStarWarsApi;
