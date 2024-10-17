import { useRef } from "react";
import Interpretes from '../interpretes/Interpretes.jsx';
import Taquilla from '../taquilla/Taquilla.jsx';
import './Pelicula.css';
import { ocultar } from "../../../biblioteca/biblioteca.js";

const Pelicula = (props) => {
  const { nombre, cartelera, director, actores, recaudacion, children } = props;
  const refe = useRef(null);

  
  return (
    <div className="contenedorPelicula">
      <div className="encabezadoPelicula">
        <h2 className="tituloPelicula">{nombre}</h2>
        <p className="directorPelicula">
          <strong>Director:</strong> {director}
        </p>
      </div>
      <div className="imagen-resumen">
      <div className="imagenPelicula">
        <img src={cartelera} alt={`Cartel de la película ${nombre}`} />
      </div>
      <div className="resumenPelicula">
        <h3>Resumen:</h3>
        <p>{children}</p>
      </div>
      </div>
      <div className="elencoPelicula">
        <div className="elencoTaquillaDiv">
        <button className="estilosBotonElenco" onClick={() =>{
                ocultar(refe);
                }}>Elenco</button>
                {/* Voy a pasar recaduacion que tenemos del javascript que nos dice el dinero recaudado. */}
          <Taquilla recaduacion={recaudacion}/>
          </div>
          <Interpretes ref={refe} interpretes={actores} />
      </div>
    </div>
  );
};

export default Pelicula;