import React from "react";

const TituloPelicula = ({ pelicula, manejarClickPelicula }) => {
  return (
    <li
      className="pelicula-lista"
      onClick={() => manejarClickPelicula(pelicula.episode_id)}
    >
      <span className="episode-id">Episodio {pelicula.episode_id} -> </span>
      <span className="titulo">{pelicula.title}</span>
    </li>
  );
};

export default TituloPelicula;
