import React from "react";
import "./AcercaDe.css";

const AcercaDe = () => {
  return (
    <div className="container-acerca-de">
      <h2 className="title-acerca-de">Acerca de la Aplicación</h2>
      <p className="text-acerca-de">
        Versión de la aplicación: <span className="highlight-acerca-de">2024</span>
      </p>
      <p className="text-acerca-de">
        Fecha de modificación: <span className="highlight-acerca-de">25/10/2024</span>
      </p>
      <p className="text-acerca-de">
        Hecho por <span className="highlight-acerca-de">Ian Miguel Soler</span>
      </p>
    </div>
  );
};

export default AcercaDe;
