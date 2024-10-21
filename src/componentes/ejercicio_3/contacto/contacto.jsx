import React from "react";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  const navegar = useNavigate();
  return (
    <>
      <h2>
       Contáctanos con este correo
      </h2>
      <h3>nomeimportaloquemeenvies@gmail.com</h3>
      <button
        onClick={() => {
          navegar("/");
        }}
      >
        Volver a inicio.
      </button>
    </>
  );
};

export default Contacto;