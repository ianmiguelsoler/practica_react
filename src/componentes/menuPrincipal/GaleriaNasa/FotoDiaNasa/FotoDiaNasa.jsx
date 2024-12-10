import React, { useState } from "react";
import { obtenerFotoDia } from "../../../../biblioteca/biblioteca.js";
import BotonFecha from "../../BotonesNasa/BotonFecha.jsx";
import "./FotoDiaNasa.css";

const FotoDiaNasa = ({ onSeleccionarFecha }) => {
  //Estados para manejar los errores y para tener la foto.
  const [foto, setFoto] = useState(null);
  const [error, setError] = useState(null);

  const manejarFechaSeleccionada = async (fecha) => {
    setError(null); // Limpia el error al presionar buscar.
    try {
      const resultado = await obtenerFotoDia(fecha);
      setFoto(resultado);
      onSeleccionarFecha(resultado);
    } catch (err) {
      setError("Error al obtener la foto del día.");
    }
  };

  return (
    <div className="foto-dia-nasa">
      <h2 className="foto-dia-titulo">Foto del Día</h2>
      <BotonFecha onSeleccionar={manejarFechaSeleccionada} />
      {error && <p className="foto-dia-error">{error}</p>}
      {foto && (
        <div className="foto-dia-contenido">
          <h3 className="foto-dia-subtitulo">{foto.title}</h3>
          <img
            className="foto-dia-imagen"
            src={foto.url}
            alt={foto.title}
          />
          <p className="foto-dia-explicacion">{foto.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default FotoDiaNasa;
