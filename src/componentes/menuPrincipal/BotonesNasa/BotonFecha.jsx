import React, { useState } from "react";

const BotonFecha = ({ onSeleccionar }) => {
  const [fecha, setFecha] = useState("");

  const manejarCambio = (e) => {
    setFecha(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (fecha) {
      onSeleccionar(fecha);
    }
  };

  return (
    <form onSubmit={manejarEnvio} style={{ margin: "20px" }}>
      <input
        type="date"
        value={fecha}
        onChange={manejarCambio}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#0078d7",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Ver Foto
      </button>
    </form>
  );
};

export default BotonFecha;
