"use strict";

//Generador de identificador aleatorio.
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
  };

const API_KEY = "e4BUX9LPqSd7Mk4bqdtCBqT0cRv1XLHdoC0qSCOD"; //Clave de acceso a la api de la nasa

//Obtiene la solicitud de la api con la clave y la fecha
const obtenerFotoDia = async (fecha) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${fecha}`;
  const respuesta = await fetch(url);
  return await respuesta.json();
};

//Solicita a la api la imagen y utiliza .collection.items para acceder a los datos y es especifico de esta api.
const buscarGaleria = async (busqueda) => {
  const url = `https://images-api.nasa.gov/search?q=${busqueda}&media_type=image`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos.collection.items;
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
  obtenerFotoDia,
  buscarGaleria,
  convertirFechaAEuropea,
};
