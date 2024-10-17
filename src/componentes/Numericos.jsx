import { useRef } from "react";
import { anadirNumero } from "../biblioteca/biblioteca.js";

const Numericos = () => {
    
    const refe = useRef(null);

    return (
        <>
            <div>
                <button onClick={() =>{
                 anadirNumero(refe);
                }}>Añadir numerico</button>
                <ol ref={refe}></ol>
            </div>
        </>
    );
}

export default Numericos;
