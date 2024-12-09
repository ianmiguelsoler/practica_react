import React, { useState, useEffect } from "react";
import "./DatosPeliculas.css";
import DetallesActores from "./DetallesActores/DetallesActores.jsx";
import DetalleActor from "./DetallesActores/DetalleActor/DetalleActor.jsx";
import { convertirFechaAEuropea } from "../../../../../../biblioteca/biblioteca.js";

const DatosPelicula = ({ pelicula }) => {
  const [actores, setActores] = useState([]);
  const [actorSeleccionado, setActorSeleccionado] = useState(null);

  useEffect(() => {
    // Reiniciar el actor seleccionado cuando cambie la película
    setActorSeleccionado(null);

    const obtenerActores = async () => {
      try {
        const promesas = pelicula.characters.slice(0, 10).map((url) =>
          fetch(url).then((res) => res.json())
        );
        const actoresResueltos = await Promise.all(promesas);
        setActores(actoresResueltos);
      } catch (error) {
        console.error(`Error al cargar los actores: ${error.message}`);
      }
    };
    obtenerActores();
  }, [pelicula]); // Ejecutar cuando cambie la película

  const manejarClickActor = (actor) => {
    setActorSeleccionado(actor);
  };

  return (
    <div className="datos-pelicula">
      <div className="encabezado">
        <img
          src="src/biblioteca/videos/naveImperial.png"
          alt="Nave Imperial"
          className="nave-imperial"
        />
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
          <strong>📅 Fecha de lanzamiento:</strong>{" "}
          {convertirFechaAEuropea(pelicula.release_date)}
        </p>
        <p className="sinopsis">
          <strong>📜 Sinopsis:</strong> {pelicula.opening_crawl}
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
