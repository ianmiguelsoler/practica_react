"use strict";

//Generador de identificador aleatorio.
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
  };

"use strict";

// Obtener datos de la API de Star Wars con async/await
const obtenerDatosApiStarWars = async (url) => {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error(
        `Error al obtener datos: ${respuesta.status} ${respuesta.statusText}`
      );
    }
    const datos = await respuesta.json();
    return datos.results;
  } catch (error) {
    console.error(`Error en obtenerDatosApiStarWars: ${error.message}`);
    throw error;
  }
};

// Obtener información de una película por ID con async/await
const obtenerPeliculaPorId = async (url) => {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error(
        `Error al obtener los datos de la película: ${respuesta.status} ${respuesta.statusText}`
      );
    }
    return await respuesta.json();
  } catch (error) {
    console.error(`Error en obtenerPeliculaPorId: ${error.message}`);
    throw error;
  }
};

// Convertir fecha a formato europeo
const convertirFechaAEuropea = (fecha) => {
  if (!fecha) {
    console.error("La fecha proporcionada no es válida.");
    return "";
  }
  try {
    const nuevaFecha = new Date(fecha);
    return nuevaFecha.toLocaleDateString("es-ES");
  } catch (error) {
    console.error("Error al convertir la fecha:", error.message);
    return "";
  }
};

export {
  generarUuidAleatorio,
  obtenerDatosApiStarWars,
  obtenerPeliculaPorId,
  convertirFechaAEuropea,
};
