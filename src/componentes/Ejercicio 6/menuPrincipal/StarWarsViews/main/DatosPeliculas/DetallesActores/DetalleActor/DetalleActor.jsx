import React, { useContext, useState } from "react";
import { contextoPeliculas } from "../../../../ContextoStarWars/ProveedorApiStarWars";

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
          <h4>Starships</h4>
          {starships.length > 0 ? (
            <ul>
              {starships.map((ship) => (
                <li key={ship.name}>
                  <p><strong>Nombre:</strong> {ship.name}</p>
                  <p><strong>Modelo:</strong> {ship.model}</p>
                  <p><strong>Fabricante:</strong> {ship.manufacturer}</p>
                  <p><strong>Clase:</strong> {ship.starship_class}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Este actor no tiene starships.</p>
          )}

          <h4>Vehicles</h4>
          {vehicles.length > 0 ? (
            <ul>
              {vehicles.map((vehicle) => (
                <li key={vehicle.name}>
                  <p><strong>Nombre:</strong> {vehicle.name}</p>
                  <p><strong>Modelo:</strong> {vehicle.model}</p>
                  <p><strong>Fabricante:</strong> {vehicle.manufacturer}</p>
                  <p><strong>Clase:</strong> {vehicle.vehicle_class}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Este actor no tiene vehicles.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DetalleActor;
