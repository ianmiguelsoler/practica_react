import './Cronometro.css';
import React, { useEffect, useState } from "react";
import { formatearTiempo } from "../../../../biblioteca/biblioteca.js";

const Cronometro = () => {
  const [tiempo, setTiempo] = useState(0); // Estado para el tiempo en milisegundos.
  const [activo, setActivo] = useState(true); // Estado para controlar si el cronómetro está activo o no.

  useEffect(() => {
    let intervalo;

    if (activo) {
      intervalo = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 10); // Incremento en 10ms.
      }, 10); // Intervalo de 10ms para mostrar centésimas.
    }

    // Limpieza al desmontar el componente o cuando `activo` cambia.
    return () => {
      clearInterval(intervalo);
    };
  }, [activo]); // Se ejecuta al montar y cada vez que cambia `activo`.

  // Función para manejar el reinicio.
  const reiniciarCronometro = () => {
    setTiempo(0);
    setActivo(false); // Detiene el cronómetro al reiniciar.
  };

  return (
    <div className="contenedor-fotografia">
      <p className="localizador-coordenadas">
        <span>Tiempo: <code>{formatearTiempo(tiempo)}</code></span>
      </p>
      <div className="botones">
        <button onClick={() => setActivo((prevActivo) => !prevActivo)}>
          {activo ? "Parar" : "Iniciar"}
        </button>
        <button onClick={reiniciarCronometro}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Cronometro;
