import React, { useContext, useState } from "react";
import { contextoPeliculas } from "../../../../ContextoStarWars/ProveedorApiStarWars";
import StarshipsList from "./StarShips/StarShipsList.jsx";
import VehiclesList from "./Vehiculos/VehiculosList.jsx";

const DetalleActor = () => {
//Traemos lo necesario del contexto.
  const { actorSeleccionado, starships, vehicles, cargarVehiculosYNaves } =
    useContext(contextoPeliculas);
//Hacemos una variable goku para controlar el botón y su texto.
  const [mostrarPilota, setMostrarPilota] = useState(false);
//Función, cuando cambie el valor de mostrarPilota carga los datos y cambia el valor de la variable.
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
