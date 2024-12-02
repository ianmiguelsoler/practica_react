import "./DiscoFormulario.css";
import React, { useState } from "react";
import Errores from "./errores/Errores.jsx";
import ListaDiscos from "../listaDiscos/ListaDiscos.jsx";

const DiscoFormulario = () => {
  // Estado inicial y validaciones
  const valoresIniciales = {
    nombreDisco: "",
    grupoMusica: "",
    anoPublicacion: "",
    tipoMusica: "",
    localizacion: "",
  };

  const erroresIniciales = [];

  const [discos, setDiscos] = useState([]); 
  const [disco, setDisco] = useState(valoresIniciales);
  const [errores, setErrores] = useState(erroresIniciales);


  return (
    <div>
      <form id="formularioDiscos">
        <fieldset id="camposDisco">
          <legend>Nuevo Disco</legend>

          <label htmlFor="nombreDisco">Nombre del disco:</label>
          <input
            type="text"
            id="nombreDisco"
            name="nombreDisco"
            placeholder="Introduce el nombre del disco"
            value={disco.nombreDisco}
            onChange={actualizarDato}
            className={tieneError("nombreDisco") ? "input-error" : ""}
          />
          <span className="mensaje-error">
            {errores.find((e) => e.campo === "nombreDisco")?.mensaje}
          </span>

          <label htmlFor="grupoMusica">Grupo de música o Intérprete:</label>
          <input
            type="text"
            id="grupoMusica"
            name="grupoMusica"
            placeholder="Introduce el grupo o intérprete"
            value={disco.grupoMusica}
            onChange={actualizarDato}
            className={tieneError("grupoMusica") ? "input-error" : ""}
          />
          <span className="mensaje-error">
            {errores.find((e) => e.campo === "grupoMusica")?.mensaje}
          </span>

          <label htmlFor="anoPublicacion">Año de publicación:</label>
          <input
            type="number"
            id="anoPublicacion"
            name="anoPublicacion"
            placeholder="Introduce el año de publicación"
            value={disco.anoPublicacion}
            onChange={actualizarDato}
            className={tieneError("anoPublicacion") ? "input-error" : ""}
          />
          <span className="mensaje-error">
            {errores.find((e) => e.campo === "anoPublicacion")?.mensaje}
          </span>

          <label htmlFor="tipoMusica">Tipo de Música:</label>
          <select
            id="tipoMusica"
            name="tipoMusica"
            value={disco.tipoMusica}
            onChange={actualizarDato}
            className={tieneError("tipoMusica") ? "input-error" : ""}
          >
            <option value="">Selecciona un género</option>
            <optgroup label="Rock">
              <option value="rock">Rock</option>
              <option value="progressive">Progressive</option>
              <option value="punk">Punk</option>
              <option value="trash">Trash</option>
            </optgroup>
            <optgroup label="Otros">
              <option value="otros">Otros</option>
            </optgroup>
          </select>
          <span className="mensaje-error">
            {errores.find((e) => e.campo === "tipoMusica")?.mensaje}
          </span>

          <label htmlFor="localizacion">Localización:</label>
          <input
            type="text"
            id="localizacion"
            name="localizacion"
            placeholder="Formato ES-001AA"
            value={disco.localizacion}
            onChange={actualizarDato}
            className={tieneError("localizacion") ? "input-error" : ""}
          />
          <span className="mensaje-error">
            {errores.find((e) => e.campo === "localizacion")?.mensaje}
          </span>
        </fieldset>
        <input
          id="botonGuardarDisco"
          type="button"
          value="Enviar Disco"
          onClick={manejarEnvio}
        />
      </form>

      {/* Mostrar el componente Errores */}
      <Errores errores={errores} />

      {/* Mostrar la lista de discos */}
      <ListaDiscos discos={discos} />
    </div>
  );
};

export default DiscoFormulario;
