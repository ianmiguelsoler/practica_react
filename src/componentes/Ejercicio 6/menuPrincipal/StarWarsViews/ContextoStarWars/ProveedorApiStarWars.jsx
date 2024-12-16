import React, { createContext, useState, useEffect } from "react";
import {
  obtenerDatosApiStarWars,
  obtenerPeliculaPorId,
  convertirFechaAEuropea,
} from "../../../../../biblioteca/biblioteca.js";

const contextoPeliculas = createContext();

const ProveedorPlanetas = ({ children }) => {
  const fichero = "https://swapi.py4e.com/api/films";
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

  const datosaExportar = {
    listaPelis,
    errores,
    peliculaSeleccionada,
    manejarClickPelicula
  };

  return (
    <contextoPeliculas.Provider value={datosaExportar}>
      {children}
    </contextoPeliculas.Provider>
  );
};
export default ProveedorPlanetas;

export { contextoPeliculas };
