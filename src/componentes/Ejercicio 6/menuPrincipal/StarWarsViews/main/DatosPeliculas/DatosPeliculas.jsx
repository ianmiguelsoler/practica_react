import React, {useContext} from "react";
import "./DatosPeliculas.css";
import DetallesActores from "./DetallesActores/DetallesActores.jsx";
import DetalleActor from "./DetallesActores/DetalleActor/DetalleActor.jsx";
import { contextoPeliculas } from "../../ContextoStarWars/ProveedorApiStarWars.jsx";
import { convertirFechaAEuropea } from "../../../../../../biblioteca/biblioteca.js";

const DatosPelicula = () => {
  const {
    peliculaSeleccionada,
    actores,
    actorSeleccionado,
    manejarClickActor,
  } = useContext(contextoPeliculas);

  if (!peliculaSeleccionada) {
    return <p>Selecciona una película para ver los detalles.</p>;
  }

  return (
    <div className="datos-pelicula">
      <div className="encabezado">
        <img
          src="src/biblioteca/videos/naveImperial.png"
          alt="Nave Imperial"
          className="nave-imperial"
        />
        <h2 className="titulo-pelicula">{peliculaSeleccionada.title}</h2>
      </div>
      <div className="contenido">
        <p>
          <strong>🧑‍🎬 Director:</strong> {peliculaSeleccionada.director}
        </p>
        <p>
          <strong>🎬 Productor:</strong> {peliculaSeleccionada.producer}
        </p>
        <p>
          <strong>📅 Fecha de lanzamiento:</strong>{" "}
          {convertirFechaAEuropea(peliculaSeleccionada.release_date)}
        </p>
        <p className="sinopsis">
          <strong>📜 Sinopsis:</strong> {peliculaSeleccionada.opening_crawl}
        </p>
        <div>
          <h3>Protagonistas:</h3>
          <div className="actor-container">
            <DetallesActores
              actores={actores}
              manejarClickActor={manejarClickActor}
            />
            {actorSeleccionado && <DetalleActor actor={actorSeleccionado} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosPelicula;
