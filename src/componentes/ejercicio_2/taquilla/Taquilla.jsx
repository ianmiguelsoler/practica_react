import { useRef } from "react";
import './Taquilla.css';
import { ocultar } from "../../../biblioteca/biblioteca.js";


const Taquilla = ( props ) => {
    const { recaduacion } = props;
    const refe = useRef(null);

    return (
    <>
    <div className="taquillaBoton">
    <button className="estilosBotonTaquilla" onClick={() =>{
                 ocultar(refe);
                }}>TAQUILLA</button>
        <p ref={refe}>
          {recaduacion}
        </p>
    </div>
    </>
  );
};

export default Taquilla;
