import React, { useContext } from "react";
import { contextoPeliculas } from "../../../ContextoStarWars/ProveedorApiStarWars";

const DetallesActores = () => {
  const {
    manejarClickActor,
    actores,
  } = useContext(contextoPeliculas);

  const manejarClickDelegado = (event) => {
    // Verificar si el elemento clickeado es un <li>.
    const elementoClickeado = event.target.closest("li");
    if (!elementoClickeado || !elementoClickeado.dataset.actorIndex) return;

    // Obtener el índice del actor y pasar el actor correspondiente al manejador.
    const index = parseInt(elementoClickeado.dataset.actorIndex, 10);
    manejarClickActor(actores[index]);
  };

  console.log(actores);

  return (
    <div>
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
    </div>
  );
};

export default DetallesActores;
