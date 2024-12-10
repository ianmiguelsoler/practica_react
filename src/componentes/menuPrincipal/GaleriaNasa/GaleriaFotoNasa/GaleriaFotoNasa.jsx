import React from "react";
import "../GaleriaNasa.css";

const GaleriaFotoNasa = ({ imagenes }) => {
  return (
    <div className="galeria-grid">
      {imagenes.map((item, index) => (
        <div className="galeria-item" key={index}>
          <img src={item.links[0].href} alt={item.data[0].title} />
          <p>{item.data[0].title}</p>
        </div>
      ))}
    </div>
  );
};

export default GaleriaFotoNasa;
