import './Colorines.css';
import React, { useEffect, useState } from "react";
import { generarUuidAleatorio, generarColorAleatorio } from "../../../../biblioteca/biblioteca.js";

const Colorines = () => {
  const [colorDeFondo, setColorDeFondo] = useState("");

  const cambiarColorDeFondo = () => {
    const nuevoColor = generarColorAleatorio();
    setColorDeFondo(nuevoColor);
  };

  useEffect(() => {
    // Función para actualizar las coordenadas.
    cambiarColorDeFondo()

    document.style.backgroundColor = colorDeFondo

    // Añade el evento.
    document.addEventListener("click", generarColorAleatorio);

    // Limpia el evento cuando se desmonta el componente.
    return () => {
      document.removeEventListener("click", generarColorAleatorio);
      console.log(`Se ha quitado el evento del document.`);
    };
  }, []); // Se ejecuta solo al montar y desmontar el componente.


  useEffect(() => {
    // Cambia el color de fondo cuando `colorDeFondo` cambia.
    document.body.style.backgroundColor = colorDeFondo;
  }, [colorDeFondo]); // Ejecuta este efecto cuando el color de fondo cambie.

  return (
    <div className="contenedor-fotografia">
      <p className="localizador-coordenadas">
        Color actual: <code>{colorDeFondo}</code>
      </p>
    </div>
  );
};

export default Colorines;
