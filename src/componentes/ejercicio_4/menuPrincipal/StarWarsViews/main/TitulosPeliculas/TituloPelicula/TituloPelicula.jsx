import React from "react";
//Pintamos cada titulo con su id de la película.
const TituloPelicula = ({ pelicula }) => {
  return (
    <li className="pelicula-lista">
      <span className="episode-id">Episodio {pelicula.episode_id} -> </span>
      <span className="titulo">{pelicula.title}</span>
    </li>
  );
};

export default TituloPelicula;
