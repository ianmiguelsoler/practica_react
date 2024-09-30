import React from 'react';
import './Contenedor.css'; // Importar el archivo CSS

const Contenedor = ({ children }) => {
  return (
    <div className="contenedor">
      {children}
    </div>
  );
};

export default Contenedor;
