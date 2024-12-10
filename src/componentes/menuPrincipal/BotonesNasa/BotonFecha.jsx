import React, { useState } from "react";
import "./BotonFecha.css";

/* Componente que permite seleccionar una fecha y enviarla al padre */
const BotonFecha = ({ onSeleccionar }) => {
  const [fecha, setFecha] = useState(""); // Estado para almacenar la fecha seleccionada.

   /* Actualiza el estado con la fecha seleccionada */
  const manejarCambio = (e) => {
    setFecha(e.target.value);
  };

  /* Llama a la función onSeleccionar con la fecha si está definida */
  const manejarEnvio = (e) => {
    e.preventDefault(); //Para que no se actualice al darle submit en el botón.
    if (fecha) {
      onSeleccionar(fecha);
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="boton-fecha-form">
      <input
        type="date"
        value={fecha}
        onChange={manejarCambio}
        className="boton-fecha-input"
      />
      <button type="submit" className="boton-fecha-boton">
        Ver Foto
      </button>
    </form>
  );
};

export default BotonFecha;
