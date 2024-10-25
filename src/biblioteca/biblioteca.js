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


export { obtenerNumeroAleatorio, cambiarColorParrafo, generarUuidAleatorio, ocultar, unirArray};