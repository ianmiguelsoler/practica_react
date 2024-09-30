import React from 'react';
import './Interprete.css'; // Importar el archivo CSS

const Interprete = ( props ) => {
    const { nombre , imagen , children} = props;
  return (
    <div className="contenedorFotografia">
        <div className="contenedorImagen">
            <img src={imagen} className='estilosImagen' alt="Imagen de Teemo - Legue of Legends"></img>
        </div>
        <div className="textos">
            <div className="contenedorNombre"><h1>{nombre}</h1></div>
            <div className="contenedorBiografia"><h3>{children}</h3></div>
        </div>
    </div>
  );
};

export default Interprete;
