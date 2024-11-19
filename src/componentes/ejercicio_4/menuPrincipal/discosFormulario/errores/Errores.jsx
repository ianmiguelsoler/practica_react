import React from "react";
import "./Errores.css";

const Errores = ({ errores }) => {
  if (errores.length === 0) {
    return null; // No mostrar nada si no hay errores
  }

  return (
    <div className="contenedor-errores">
      <h2>Errores encontrados:</h2>
      <ul>
        {errores.map((error, index) => (
          <li key={index} className="error-item">
            <strong>{error.campo}:</strong> {error.mensaje}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Errores;
