import React from "react";
import "./Imagenes.css";
import { generarUuidAleatorio } from "../../../../../biblioteca/biblioteca.js";

const Imagenes = (props) => {
  const { nombre, cartelera, director, actores, recaudacion } = props;

  return (
    <>
      <div className="imagen-contenida-galeria">
        <img src={cartelera} alt={nombre} className="imagen" />
        <h3>{nombre}</h3>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Recaudación:</strong> {recaudacion}</p>
        <h4><strong>Actores:</strong></h4>
        <ul>
          {actores.map((actor) => (
            <li key={generarUuidAleatorio()}>
              {actor.nombre} - {actor.fechaNacimiento}
            </li>
          ))}
        </ul>
        <button className="boton">Ver más detalles</button>
      </div>
    </>
  );
};

export default Imagenes;
