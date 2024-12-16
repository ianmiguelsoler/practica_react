import React, { createContext, useState, useEffect } from "react";
import {
  obtenerDatosApiStarWars,
  obtenerPeliculaPorId,
} from "../../../../../biblioteca/biblioteca.js";

const contextoPeliculas = createContext();

const ProveedorPlanetas = ({ children }) => {
  const fichero = "https://swapi.py4e.com/api/films";
  const valoresIniciales = [];
  const erroresIniciales = null;

  const [listaPelis, setListaPelis] = useState(valoresIniciales);
  const [errores, setErrores] = useState(erroresIniciales);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [actores, setActores] = useState([]);
  const [actorSeleccionado, setActorSeleccionado] = useState(null);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

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
    const url = `https://swapi.py4e.com/api/films/${idPelicula}/`;
    try {
      const pelicula = await obtenerPeliculaPorId(url);
      setPeliculaSeleccionada(pelicula);
      setActorSeleccionado(null); // Reiniciar actor seleccionado
      cargarActores(pelicula.characters); // Cargar actores de la película
    } catch (error) {
      console.error(`Error al obtener la película: ${error.message}`);
    }
  };

  // Función para cargar los actores de una película
  const cargarActores = async (urlsActores) => {
    try {
      const promesas = urlsActores.slice(0, 10).map((url) =>
        fetch(url).then((res) => res.json())
      );
      const actoresResueltos = await Promise.all(promesas);
      setActores(actoresResueltos);
    } catch (error) {
      console.error(`Error al cargar los actores: ${error.message}`);
    }
  };

  // Función para cargar vehículos y naves de un actor
  const cargarVehiculosYNaves = async (actor) => {
    try {
      // Cargar starships
      const promesasStarships = actor.starships.map((url) =>
        fetch(url).then((res) => res.json())
      );
      const naves = await Promise.all(promesasStarships);
      setStarships(naves);

      // Cargar vehicles
      const promesasVehicles = actor.vehicles.map((url) =>
        fetch(url).then((res) => res.json())
      );
      const vehiculos = await Promise.all(promesasVehicles);
      setVehicles(vehiculos);
    } catch (error) {
      console.error(`Error al cargar los vehículos y naves: ${error.message}`);
    }
  };

  // Función para manejar el clic en un actor
  const manejarClickActor = (actor) => {
    setActorSeleccionado(actor);
    cargarVehiculosYNaves(actor); // Cargar vehículos y naves del actor
  };

  // Carga inicial de datos al montar el componente.
  useEffect(() => {
    cargarDatosIniciales();
  }, []);

  const datosaExportar = {
    listaPelis,
    errores,
    peliculaSeleccionada,
    manejarClickPelicula,
    actores,
    actorSeleccionado,
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
