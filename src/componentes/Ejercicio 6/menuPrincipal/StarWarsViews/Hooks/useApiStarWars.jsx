import { useState, useEffect } from "react";
import {
  fetchConFinally,
  fetchMultiplesRecursos,
} from "../../../../../biblioteca/promesaApiStarWars.js";

/**
 * Hook personalizado para manejar la API de Star Wars y gestionar el estado.
 */
const useApiStarWars = () => {
  // URL base para obtener información sobre las películas.
  const fichero = "https://swapi.py4e.com/api/films";

  // Valores iniciales para los estados.
  const valoresIniciales = [];
  const erroresIniciales = null;

  // Estados del hook.
  const [listaPelis, setListaPelis] = useState(valoresIniciales); // Lista de películas.
  const [errores, setErrores] = useState(erroresIniciales); // Manejo de errores.
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null); // Película seleccionada.
  const [actores, setActores] = useState([]); // Lista de actores de la película seleccionada.
  const [actorSeleccionado, setActorSeleccionado] = useState(null); // Actor seleccionado.
  const [starships, setStarships] = useState([]); // Lista de naves del actor seleccionado.
  const [vehicles, setVehicles] = useState([]); // Lista de vehículos del actor seleccionado.

  // Función para cargar la lista inicial de películas.
  const cargarDatosIniciales = async () => {
    try {
      // Realiza la solicitud para obtener los datos de las películas.
      const datos = await fetchConFinally(fichero);

      // Verifica si los datos tienen el formato esperado.
      if (datos && datos.results) {
        setListaPelis(datos.results); // Actualiza la lista de películas en el estado.
      } else {
        throw new Error("Formato de datos inválido al cargar las películas.");
      }
    } catch (error) {
      // Manejo de errores: muestra el error en la consola y actualiza el estado de errores.
      console.error(`Error en cargarDatosIniciales: ${error.message}`);
      setErrores(`No se pudieron cargar los datos: ${error.message}`);
    }
  };

  // Función para manejar el clic en una película y cargar sus datos.
  const manejarClickPelicula = async (idPelicula) => {
    const url = `https://swapi.py4e.com/api/films/${idPelicula}/`;
    try {
      // Solicita los datos de la película seleccionada.
      const pelicula = await fetchConFinally(url);
      setPeliculaSeleccionada(pelicula); // Actualiza la película seleccionada.
      setActorSeleccionado(null); // Limpia el actor seleccionado.

      // Si hay personajes asociados, carga los actores.
      if (pelicula.characters) {
        cargarActores(pelicula.characters);
      }
    } catch (error) {
      // Manejo de errores al cargar la película.
      console.error(`Error al obtener la película: ${error.message}`);
    }
  };

  // Función para cargar los actores de una película.
  const cargarActores = async (urlsActores) => {
    try {
      // Solicita los datos de los actores (hasta un máximo de 10).
      const actoresResueltos = await fetchMultiplesRecursos(
        urlsActores.slice(0, 10)
      );

      // Filtra los resultados válidos y actualiza el estado de actores.
      setActores(actoresResueltos.filter((actor) => actor !== null));
    } catch (error) {
      // Manejo de errores al cargar los actores.
      console.error(`Error al cargar los actores: ${error.message}`);
    }
  };

  // Función para cargar los vehículos y naves asociadas a un actor.
  const cargarVehiculosYNaves = async (actor) => {
    try {
      // Solicita los datos de las naves y vehículos simultáneamente.
      const [naves, vehiculos] = await Promise.all([
        fetchMultiplesRecursos(actor.starships), // Naves del actor.
        fetchMultiplesRecursos(actor.vehicles), // Vehículos del actor.
      ]);

      // Filtra los resultados válidos y actualiza los estados correspondientes.
      setStarships(naves.filter((nave) => nave !== null));
      setVehicles(vehiculos.filter((vehiculo) => vehiculo !== null));
    } catch (error) {
      // Manejo de errores al cargar naves y vehículos.
      console.error("Error al cargar vehículos y naves:", error);
    }
  };

  // Función para manejar el clic en un actor y cargar sus vehículos y naves.
  const manejarClickActor = (actor) => {
    setActorSeleccionado(actor); // Actualiza el actor seleccionado.
    if (actor.starships || actor.vehicles) {
      cargarVehiculosYNaves(actor); // Carga las naves y vehículos del actor.
    }
  };

  // Efecto para cargar los datos iniciales al montar el componente.
  useEffect(() => {
    cargarDatosIniciales(); // Llama a la función para cargar películas.
  }, []);

  // Retorna los estados y funciones para ser utilizados por el componente que consume este hook.
  return {
    listaPelis, // Lista de películas.
    errores, // Errores al cargar datos.
    peliculaSeleccionada, // Película actualmente seleccionada.
    manejarClickPelicula, // Función para manejar clics en películas.
    actores, // Lista de actores de la película seleccionada.
    actorSeleccionado, // Actor actualmente seleccionado.
    cargarVehiculosYNaves, // Función para cargar vehículos y naves.
    manejarClickActor, // Función para manejar clics en actores.
    starships, // Lista de naves del actor seleccionado.
    vehicles, // Lista de vehículos del actor seleccionado.
  };
};

export default useApiStarWars;
