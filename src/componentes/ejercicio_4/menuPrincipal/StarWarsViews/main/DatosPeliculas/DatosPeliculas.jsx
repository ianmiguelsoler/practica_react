import React from "react";
import "./DatosPeliculas.css";
import {convertirFechaAEuropea} from "../../../../../../biblioteca/biblioteca.js"

const DatosPelicula = ({ pelicula }) => {

  return (
    <div className="datos-pelicula">
      <div className="encabezado">
        <img src="src\biblioteca\videos\naveImperial.png" alt="Nave Imperial" className="nave-imperial" />
        <h2 className="titulo-pelicula">{pelicula.title}</h2>
      </div>
      <div className="contenido">
        <p>
          <strong>🧑‍🎬 Director:</strong> {pelicula.director}
        </p>
        <p>
          <strong>🎬 Productor:</strong> {pelicula.producer}
        </p>
        <p>
          <strong>📅 Fecha de lanzamiento:</strong> {convertirFechaAEuropea(
            pelicula.release_date
          )}
        </p>
        <p className="sinopsis">
          <strong>📜 Sinopsis:</strong> {pelicula.opening_crawl}
        </p>
      </div>
    </div>
  );
};

export default DatosPelicula;
