import React from "react";

const DetalleActor = ({ actor }) => {
  console.log(actor)
  return (
    <div className="detalle-actor">
      <h3>Detalle del Actor</h3>
      <p><strong>Nombre:</strong> {actor.name}</p>
      <p><strong>Género:</strong> {actor.gender}</p>
      <p><strong>Altura:</strong> {actor.height} cm</p>
      <p><strong>Peso:</strong> {actor.mass} kg</p>
      <p><strong>Color de pelo:</strong> {actor.hair_color}</p>
      <p><strong>Color de ojos:</strong> {actor.eye_color}</p>
    </div>
  );
};

export default DetalleActor;
