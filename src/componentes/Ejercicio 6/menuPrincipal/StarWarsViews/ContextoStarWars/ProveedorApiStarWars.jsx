import React, { createContext, useState, useEffect } from "react";
import {
  fetchConFinally,
  fetchMultiplesRecursos,
} from "../../../../../biblioteca/promesaApiStarWars.js";

// Crear contexto.
const contextoPeliculas = createContext();

const ProveedorPlanetas = ({ children }) => {
  // Constantes iniciales.
  const fichero = "https://swapi.py4e.com/api/films";
  const valoresIniciales = [];
  const erroresIniciales = null;

  // Estados.
  const [listaPelis, setListaPelis] = useState(valoresIniciales);
  const [errores, setErrores] = useState(erroresIniciales);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [actores, setActores] = useState([]);
  const [actorSeleccionado, setActorSeleccionado] = useState(null);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  // Función para cargar datos iniciales.
  const cargarDatosIniciales = async () => {
    try {
      const datos = await fetchConFinally(fichero);
      if (datos && datos.results) {
        setListaPelis(datos.results);
      } else {
        throw new Error("Formato de datos inválido al cargar las películas.");
      }
    } catch (error) {
      console.error(`Error en cargarDatosIniciales: ${error.message}`);
      setErrores(`No se pudieron cargar los datos: ${error.message}`);
    }
  };

  // Función para manejar el clic en una película.
  const manejarClickPelicula = async (idPelicula) => {
    const url = `https://swapi.py4e.com/api/films/${idPelicula}/`;
    try {
      const pelicula = await fetchConFinally(url);
      setPeliculaSeleccionada(pelicula);
      setActorSeleccionado(null);
      if (pelicula.characters) {
        cargarActores(pelicula.characters);
      }
    } catch (error) {
      console.error(`Error al obtener la película: ${error.message}`);
    }
  };

  // Función para cargar los actores de una película.
  const cargarActores = async (urlsActores) => {
    try {
      const actoresResueltos = await fetchMultiplesRecursos(
        urlsActores.slice(0, 10)
      );
      setActores(actoresResueltos.filter((actor) => actor !== null));
    } catch (error) {
      console.error(`Error al cargar los actores: ${error.message}`);
    }
  };

  // Función para cargar vehículos y naves de un actor.
  const cargarVehiculosYNaves = async (actor) => {
    try {
      const [naves, vehiculos] = await Promise.all([
        fetchMultiplesRecursos(actor.starships),
        fetchMultiplesRecursos(actor.vehicles),
      ]);

      setStarships(naves.filter((nave) => nave !== null));
      setVehicles(vehiculos.filter((vehiculo) => vehiculo !== null));
    } catch (error) {
      console.error("Error al cargar vehículos y naves:", error);
    }
  };

  // Función para manejar el clic en un actor.
  const manejarClickActor = (actor) => {
    setActorSeleccionado(actor);
    if (actor.starships || actor.vehicles) {
      cargarVehiculosYNaves(actor);
    }
  };

  // Carga inicial de datos al montar el componente.
  useEffect(() => {
    cargarDatosIniciales();
  }, []);

  // Valores exportados.
  const datosaExportar = {
    listaPelis,
    errores,
    peliculaSeleccionada,
    manejarClickPelicula,
    actores,
    actorSeleccionado,
    cargarVehiculosYNaves,
    manejarClickActor,
    starships,
    vehicles,
  };

  return (
    <contextoPeliculas.Provider value={datosaExportar}>
      {children}
    </contextoPeliculas.Provider>
  );
};

export default ProveedorPlanetas;
export { contextoPeliculas };
