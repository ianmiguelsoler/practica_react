import React from "react";

const DetallesActores = ({ actores, manejarClickActor }) => {
  return (
    <ul>
      {actores.map((actor) => (
        <li
          key={actor.url}
          onClick={() => manejarClickActor(actor)}
          className="actor-nombre"
        >
          {actor.name}
        </li>
      ))}
    </ul>
  );
};

export default DetallesActores;
