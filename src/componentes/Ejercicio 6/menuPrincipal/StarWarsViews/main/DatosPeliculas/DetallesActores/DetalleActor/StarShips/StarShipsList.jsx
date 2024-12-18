import React from "react";
//Componente que muestra todas las naves.
const StarshipsList = ({ starships }) => {
  return (
    <div>
      <h4 className="lista-encabezado">Starships</h4>
      {starships.length > 0 ? (
        <div className="lista-contenedor">
          {starships.map((ship) => (
            <div key={ship.name} className="lista-item">
              <p><strong>Nombre:</strong> {ship.name}</p>
              <p><strong>Modelo:</strong> {ship.model}</p>
              <p><strong>Fabricante:</strong> {ship.manufacturer}</p>
              <p><strong>Clase:</strong> {ship.starship_class}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="lista-vacia">Este actor no tiene starships.</p>
      )}
    </div>
  );
};

export default StarshipsList;
