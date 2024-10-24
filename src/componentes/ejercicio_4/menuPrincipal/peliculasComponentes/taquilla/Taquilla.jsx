import { useRef } from "react";
import './Taquilla.css';
import { ocultar } from "../../../../../biblioteca/biblioteca.js";


const Taquilla = ( props ) => {
    const { recaduacion } = props;
    const refe = useRef(null);

    return (
    <>
    <div className="taquillaBoton">
    <button className="estilosBotonTaquilla" onClick={() =>{
      //Llamamos a la funcion ocultar que tenemos en la biblioteca.
                 ocultar(refe);
                }}>TAQUILLA</button>
        <p ref={refe}>
          <span>La recaudacion ha sido de: </span>{recaduacion}
        </p>
    </div>
    </>
  );
};

export default Taquilla;
