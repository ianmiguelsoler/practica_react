import './Colorines.css';
import React, { useEffect, useState } from "react";
import { generarColorAleatorio } from "../../../../biblioteca/biblioteca.js";

const Colorines = () => {
  const [colorDeFondo, setColorDeFondo] = useState("");

  // Función para manejar el evento de clic y actualizar el estado.
  const cambiarColorDeFondo = () => {
    const nuevoColor = generarColorAleatorio();
    setColorDeFondo(nuevoColor);
  };

  useEffect(() => {
    // Inicializa el color de fondo al montar el componente.
    cambiarColorDeFondo();

    // Añade el evento al documento
    document.addEventListener("click", cambiarColorDeFondo);

    // Limpia el evento cuando el componente se desmonta.
    return () => {
      document.removeEventListener("click", cambiarColorDeFondo);
      console.log(`Se ha quitado el evento del Cambio de color.`);
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
