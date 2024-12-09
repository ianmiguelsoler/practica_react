import { useEffect, useState } from "react";
import "./ListaStarWarsApi.css";
import TitulosPeliculas from "./TitulosPeliculas/TitulosPeliculas.jsx";
import DatosPelicula from "./DatosPeliculas/DatosPeliculas.jsx";
import { obtenerDatosApiStarWars, obtenerPeliculaPorId } from "../../../../../biblioteca/biblioteca.js";

const ListaStarWarsApi = () => {
  // Inicializamos las variables de estado.
  const fichero = "https://swapi.dev/api/films";
  const valoresIniciales = [];
  const erroresIniciales = null;

  const [listaPelis, setListaPelis] = useState(valoresIniciales);
  const [errores, setErrores] = useState(erroresIniciales);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  // Función para cargar datos iniciales con async/await.
  const cargarDatosIniciales = async () => {
    try {
      const datos = await obtenerDatosApiStarWars(fichero);
      setListaPelis(datos);
    } catch (error) {
      console.error(`Error en cargarDatosIniciales: ${error.message}`);
      setErrores(`No se pudieron cargar los datos: ${error.message}`);
    }
  };

  // Función para manejar el clic en una película con async/await.
  const manejarClickPelicula = async (idPelicula) => {
    const url = `https://swapi.dev/api/films/${idPelicula}/`;
    try {
      const pelicula = await obtenerPeliculaPorId(url);
      setPeliculaSeleccionada(pelicula);
    } catch (error) {
      console.error(`Error al obtener la película: ${error.message}`);
    }
  };

  // Carga inicial de datos al montar el componente.
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
