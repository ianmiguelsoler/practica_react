"use strict";


const obtenerNumeroAleatorio = () => {
    return Math.floor(Math.random() * 1000) + 1;
};
const anadirNumero = (referencia) => {
    referencia.current.innerHTML += `<li>El número aleatorio es este ${obtenerNumeroAleatorio()}.</li>`;
}



export { anadirNumero };