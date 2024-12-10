import React, { useEffect, useState } from "react";
import { buscarGaleria } from "../../../biblioteca/biblioteca.js";
import "./GaleriaNasa.css";
import GaleriaFotoNasa from "./GaleriaFotoNasa/GaleriaFotoNasa.jsx";


const GaleriaNasa = () => {
  //Dos estados para manejar las imagenes y la carga.
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);

  //Cargamos la galería llamando a la función de la api que busca planetas y le pasamos lo que queremos buscar como parametro.
  useEffect(() => {
    const cargarGaleria = async () => {
      try {
        const resultados = await buscarGaleria("planets");
        setImagenes(resultados);
      } catch (err) {
        console.error("Error al cargar la galería:", err);
      } finally {
        setLoading(false);
      }
    };

    cargarGaleria();
  }, []);

  return (
    <>
     <div className="galeria-nasa">
      <h2>Galería de Imágenes</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <GaleriaFotoNasa imagenes={imagenes} />
      )}
    </div>
    </>
  );
};

export default GaleriaNasa;
