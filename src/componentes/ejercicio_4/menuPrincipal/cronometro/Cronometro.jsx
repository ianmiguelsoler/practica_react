import './Cronometro.css';
import React, { useEffect, useState } from "react";
import { generarUuidAleatorio } from "../../../../biblioteca/biblioteca.js";

const Cronometro = () => {
  // const [ejeY, setEjeY] = useState(0);
  // const [ejeX, setEjeX] = useState(0);

  // useEffect(() => {
  //   // Función para actualizar las coordenadas.
  //   const actualizarCoordenadas = (event) => {
  //     setEjeX(event.clientX);
  //     setEjeY(event.clientY);
  //   };

  //   // Añade el evento.
  //   document.addEventListener("mousemove", actualizarCoordenadas);

  //   // Limpia el evento cuando se desmonta el componente.
  //   return () => {
  //     document.removeEventListener("mousemove", actualizarCoordenadas);
  //     console.log(`Se ha quitado el evento del Localizador.`);
  //   };
  // }, []); // Se ejecuta solo al montar y desmontar el componente.

  return (
    <div className="contenedor-fotografia">
      <p className="localizador-coordenadas">
        <span>Eje X: <code>{ejeX}</code></span>
        <br />
        <span>Eje Y: <code>{ejeY}</code></span>
      </p>
    </div>
  );
};

export default Cronometro;
