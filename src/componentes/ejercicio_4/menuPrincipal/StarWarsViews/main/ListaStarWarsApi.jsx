import { useEffect, useState } from "react";
import "./ListaStarWarsApi.css";
import TitulosPeliculas from "./TitulosPeliculas/TitulosPeliculas.jsx";
import DatosPelicula from "./DatosPeliculas/DatosPeliculas.jsx";
import { obtenerDatosApiStarWars } from "../../../../../biblioteca/biblioteca.js";

const ListaStarWarsApi = () => {
  const fichero = "https://swapi.dev/api/films";
  const valoresIniciales = [];
  const erroresIniciales = null;

  const [listaPelis, setListaPelis] = useState(valoresIniciales);
  const [errores, setErrores] = useState(erroresIniciales);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const cargarDatosIniciales = () => {
    obtenerDatosApiStarWars(fichero)
      .then((datos) => {
        setListaPelis(datos);
      })
      .catch((error) => {
        console.error(`Error en cargarDatosIniciales: ${error.message}`);
        setErrores(`No se pudieron cargar los datos: ${error.message}`);
      });
  };

  const manejarClickPelicula = (idPelicula) => {
    const url = `https://swapi.dev/api/films/${idPelicula}/`;
    fetch(url)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(
            `Error al obtener los datos de la película: ${respuesta.status} ${respuesta.statusText}`
          );
        }
        return respuesta.json();
      })
      .then((pelicula) => {
        setPeliculaSeleccionada(pelicula);
      })
      .catch((error) => {
        console.error(`Error al obtener la película: ${error.message}`);
      });
  };

  useEffect(() => {
    cargarDatosIniciales();
  }, []);

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
