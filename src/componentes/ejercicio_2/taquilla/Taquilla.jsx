import './Taquilla.css';
import { ocultar } from "../../../biblioteca/biblioteca.js";


const Taquilla = ( props ) => {
    const { recaudaciones } = props;
    const refe = useRef(null);

    return (
    <>
    <div className="taquillaBoton">
        <button className="estilosBotonTaquilla" onClick={() =>{
          ocultar();
        }}>TAQUILLA</button>
        <p ref={refe}>
          pene pene
        </p>
    </div>
    </>
  );
};

export default Taquilla;
