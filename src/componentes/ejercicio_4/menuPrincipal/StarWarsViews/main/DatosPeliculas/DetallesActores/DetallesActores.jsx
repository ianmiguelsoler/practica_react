import React from "react";

const DetallesActores = ({ actores, manejarClickActor }) => {
  const manejarClickDelegado = (event) => {
    // Verificar si el elemento clickeado es un <li>
    const elementoClickeado = event.target.closest("li");
    if (!elementoClickeado || !elementoClickeado.dataset.actorIndex) return;

    // Obtener el índice del actor y pasar el actor correspondiente al manejador
    const index = parseInt(elementoClickeado.dataset.actorIndex, 10);
    manejarClickActor(actores[index]);
  };

  return (
    <ul className="actor-lista" onClick={manejarClickDelegado}>
      {actores.map((actor, index) => (
        <li
          key={actor.url}
          data-actor-index={index}
          className="actor-nombre"
        >
          {actor.name}
        </li>
      ))}
    </ul>
  );
};

export default DetallesActores;
