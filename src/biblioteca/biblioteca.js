"use strict";

//Generador de identificador aleatorio.
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
  };


//!----------Función para unificar un array--------En el fichero rutas
 //Esta función unifica los arrays de los actores en uno solo.
 const unirArray = (arraySinUnificar) => {
    // Usamos map para extraer los actores y flat para unificar todo en un solo array.
    const arrayUnificado = arraySinUnificar
      .map(pelicula => pelicula.actores)  // Obtenemos el array de actores de cada película.
      .flat();  // Unificamos todos los arrays en uno solo.
  
    return arrayUnificado;
  };


const obtenerNumeroAleatorioSinRepetir = (arrayDeObjetos) => {
    let nuevoNumero;

    do {
        nuevoNumero = obtenerNumeroAleatorio();
        // Verifica si algún objeto en el array tiene un campo 'numero' igual a 'nuevoNumero'. Si encuentra uno, devuelve 'true' y genera otro número.
    } while (arrayDeObjetos.some(objeto => objeto.numero === nuevoNumero));

    // Devuelve el nuevo número como un objeto sin añadirlo directamente al array.
    return { numero: nuevoNumero };
};

  //Obtener Datos api de Star Wars.
  const obtenerDatosApiStarWars = (url) => {
    return fetch(url)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(
            `Error al obtener datos: ${respuesta.status} ${respuesta.statusText}`
          );
        }
        return respuesta.json();
      })
      .then((datos) => datos.results)
      .catch((error) => {
        console.error(`Error en obtenerDatosApiStarWars: ${error.message}`);
        throw error;
      });
  };
  //Funcion que busca por id en la api para obtener la información de la película.
  const obtenerPeliculaPorId = (url) => {
    return fetch(url)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(
            `Error al obtener los datos de la película: ${respuesta.status} ${respuesta.statusText}`
          );
        }
        return respuesta.json();
      })
      .catch((error) => {
        console.error(`Error en obtenerPeliculaPorId: ${error.message}`);
        throw error;
      });
  };
  //Función que convierte la fecha inglesa a la europea.
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
    unirArray, 
    obtenerNumeroAleatorioSinRepetir,
    obtenerDatosApiStarWars,
    convertirFechaAEuropea,
    obtenerPeliculaPorId
};