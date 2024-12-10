import React, { useState } from "react";
import FotoDiaNasa from "../GaleriaNasa/FotoDiaNasa/FotoDiaNasa.jsx";
import GaleriaNasa from "../GaleriaNasa/GaleriaNasa.jsx";
import "./SeleccionaPrincipal.css"

const SeleccionNasa = () => {
  const [componenteActivo, setComponenteActivo] = useState("FotoDiaNasa");

  // Cambiar el componente activo según la selección.
  const manejarCambioComponente = (componente) => {
    setComponenteActivo(componente);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Explora la NASA, ELIGE QUE QUIERES HACER</h1>
      {/* Botones para seleccionar el componente */}
      <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => manejarCambioComponente("FotoDiaNasa")}
        className={`boton-nasa ${componenteActivo === "FotoDiaNasa" ? "activo" : "inactivo"}`}
        >
        Foto del Día
        </button>
        <button
        onClick={() => manejarCambioComponente("GaleriaNasa")}
        className={`boton-nasa ${componenteActivo === "GaleriaNasa" ? "activo" : "inactivo"}`}
        >
        Galería
        </button>
      </div>

      {/* Activa el componente seleccionado */}
      {componenteActivo === "FotoDiaNasa" && <FotoDiaNasa />}
      {componenteActivo === "GaleriaNasa" && <GaleriaNasa />}
    </div>
  );
};

export default SeleccionNasa;
