import React, { useState, useEffect } from "react";
import { obtenerFotoDia } from "../../../../biblioteca/biblioteca.js";
import BotonFecha from "../../BotonesNasa/BotonFecha.jsx";
import "./FotoDiaNasa.css";

const FotoDiaNasa = ({ onSeleccionarFecha }) => {
  // Estados para manejar los errores y para tener la foto.
  const [foto, setFoto] = useState(null);
  const [error, setError] = useState("");

  // Calcula la fecha de ayer en formato YYYY-MM-DD
  const obtenerFechaAyer = () => {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1); // Resta un día a la fecha actual
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const dia = String(hoy.getDate()).padStart(2, "0");
    return `${año}-${mes}-${dia}`;
  };

  useEffect(() => {
    // Carga la foto del día anterior al montar el componente
    const cargarFotoAyer = async () => {
      const fechaAyer = obtenerFechaAyer();
      try {
        const resultado = await obtenerFotoDia(fechaAyer);
        setFoto(resultado);
        onSeleccionarFecha(resultado);
      } catch (err) {
        setError("Error al obtener la foto del día.");
      }
    };

    cargarFotoAyer();
  }, [onSeleccionarFecha]);

  const manejarFechaSeleccionada = async (fecha) => {
    setError(""); // Limpia el error al presionar buscar.

    try {
      const resultado = await obtenerFotoDia(fecha);
      setFoto(resultado);
      onSeleccionarFecha(resultado);
      setError("");
    } catch (err) {
      setError("Error al obtener la foto del día.");
    }
  };

  return (
    <div className="foto-dia-nasa">
      <h2 className="foto-dia-titulo">Foto del Día Anterior</h2>
      <BotonFecha onSeleccionar={manejarFechaSeleccionada} fechaPredeterminada={obtenerFechaAyer()} />
      {error ? <p className="foto-dia-error">{error}</p> : ""}
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
