import React, { useState } from "react";
import { obtenerFotoDia } from "../../../../biblioteca/biblioteca.js";
import BotonFecha from "../../BotonesNasa/BotonFecha.jsx";

const FotoDiaNasa = ({ onSeleccionarFecha }) => {
  const [foto, setFoto] = useState(null);
  const [error, setError] = useState(null);

  const manejarFechaSeleccionada = async (fecha) => {
    try {
      const resultado = await obtenerFotoDia(fecha);
      setFoto(resultado);
      onSeleccionarFecha(resultado);
      setError(null);
    } catch (err) {
      setError("Error al obtener la foto del día.");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Foto del Día</h2>
      <BotonFecha onSeleccionar={manejarFechaSeleccionada} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {foto && (
        <div>
          <h3>{foto.title}</h3>
          <img
            src={foto.url}
            alt={foto.title}
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
          <p>{foto.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default FotoDiaNasa;
