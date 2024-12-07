"use strict";

//Generador de identificador aleatorio.
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
  };

const obtenerNumeroAleatorio = () => {
    return Math.floor(Math.random() * 1000) + 1;
};

const cambiarColorParrafo = (referencia) => {
    referencia.current.style.backgroundColor = generarColorAleatorio()
}

const generarColorAleatorio = () => {
    const r = Math.floor(Math.random() * 256); // Rojo
    const g = Math.floor(Math.random() * 256); // Verde
    const b = Math.floor(Math.random() * 256); // Azul
    return `rgb(${r}, ${g}, ${b})`;
};

//Función que le añade la clase oculto o la quita según esté activa o no.
const ocultar = (referencia) => {
    referencia.current.classList.toggle("oculto")
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



// Función para formatear el tiempo.
const formatearTiempo = (tiempo) => {
    const milisegundos = tiempo % 1000;
    const segundos = Math.floor((tiempo / 1000) % 60);
    const minutos = Math.floor(tiempo / 60000);
    return `${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}:${Math.floor(milisegundos / 10)
      .toString()
      .padStart(2, "0")}`;
  };

  //Obtener Datos api de Star Wars
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
  //Funcion que busca por id en la api para obtener la información de la película
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
  //Función que convierte la fecha inglesa a la europea
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
    obtenerNumeroAleatorio,
    cambiarColorParrafo,
    generarUuidAleatorio,
    ocultar, 
    unirArray, 
    obtenerNumeroAleatorioSinRepetir,
    generarColorAleatorio,
    formatearTiempo,
    obtenerDatosApiStarWars,
    convertirFechaAEuropea,
    obtenerPeliculaPorId
};