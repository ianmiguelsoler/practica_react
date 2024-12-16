import React, { useContext, useState } from "react";
import { contextoPeliculas } from "../../../../ContextoStarWars/ProveedorApiStarWars";
import StarshipsList from "./StarShips/StarShipsList.jsx";
import VehiclesList from "./Vehiculos/VehiculosList.jsx";

const DetalleActor = () => {
  const { actorSeleccionado, starships, vehicles, cargarVehiculosYNaves } =
    useContext(contextoPeliculas);
  const [mostrarPilota, setMostrarPilota] = useState(false);

  const manejarClickPilota = () => {
    setMostrarPilota(!mostrarPilota);
    if (!mostrarPilota) cargarVehiculosYNaves(actorSeleccionado);
  };

  return (
    <div className="detalle-actor">
      <h3>Detalle del Actor</h3>
      <p><strong>Nombre:</strong> {actorSeleccionado.name}</p>
      <p><strong>Género:</strong> {actorSeleccionado.gender}</p>
      <p><strong>Altura:</strong> {actorSeleccionado.height} cm</p>
      <p><strong>Peso:</strong> {actorSeleccionado.mass} kg</p>
      <p><strong>Color de pelo:</strong> {actorSeleccionado.hair_color}</p>
      <p><strong>Color de ojos:</strong> {actorSeleccionado.eye_color}</p>

      <button onClick={manejarClickPilota}>
        {mostrarPilota ? "Ocultar Vehículos y Naves" : "Pilota"}
      </button>
      {mostrarPilota && (
        <div>
          <StarshipsList starships={starships} />
          <VehiclesList vehicles={vehicles} />
        </div>
      )}
    </div>
  );
};

export default DetalleActor;
