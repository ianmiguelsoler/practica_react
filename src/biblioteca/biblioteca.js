"use strict";

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


const ocultar = (referencia) => {
    referencia.current.classList.toggle('oculto')
};

export { obtenerNumeroAleatorio, cambiarColorParrafo, generarUuidAleatorio, ocultar};