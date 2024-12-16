import React from "react";

const VehiclesList = ({ vehicles }) => {
  return (
    <div>
      <h4 className="lista-encabezado">Vehicles</h4>
      {vehicles.length > 0 ? (
        <div className="lista-contenedor">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="lista-item">
              <p><strong>Nombre:</strong> {vehicle.name}</p>
              <p><strong>Modelo:</strong> {vehicle.model}</p>
              <p><strong>Fabricante:</strong> {vehicle.manufacturer}</p>
              <p><strong>Clase:</strong> {vehicle.vehicle_class}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="lista-vacia">Este actor no tiene vehicles.</p>
      )}
    </div>
  );
};

export default VehiclesList;
