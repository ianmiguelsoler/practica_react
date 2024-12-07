import React from "react";

const DatosPelicula = ({ pelicula }) => {
  const convertirFechaAEuropea = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return nuevaFecha.toLocaleDateString("es-ES");
  };

  return (
    <>
    <div className="datos-pelicula">
      <h2>{pelicula.title}</h2>
      <p><strong>Director:</strong> {pelicula.director}</p>
      <p><strong>Productor:</strong> {pelicula.producer}</p>
      <p><strong>Fecha de lanzamiento:</strong> {convertirFechaAEuropea(pelicula.release_date)}</p>
      <p><strong>Sinopsis:</strong> {pelicula.opening_crawl}</p>
    </div>
    </>
  );
};

export default DatosPelicula;
