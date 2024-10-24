import React from "react";
import Imagenes from "../imagenes/Imagenes.jsx";
import { generarUuidAleatorio } from "../../../../../biblioteca/biblioteca.js";


const Galeria = ( props )  => {
  const { galeria } = props;
  console.log(galeria); 
  return (
    <div className="galeria">
      {galeria.length
          ? galeria.map((valor) => {
              return (
                <Imagenes
                key={generarUuidAleatorio()}
                nombre={valor.nombre}
                cartelera={valor.cartelera}
                director={valor.director}
                actores={valor.actores}
                recaudacion={valor.recaudacion}
                >
                </Imagenes>
              );
            })
          : (
        <p>No hay películas disponibles</p>
      )}
    </div>
   );
};


export default Galeria;
