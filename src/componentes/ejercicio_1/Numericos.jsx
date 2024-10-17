import { useRef } from "react";
import { obtenerNumeroAleatorio } from "../../biblioteca/biblioteca.js";

const Numericos = () => {
    
    const refe = useRef(null);
    const anadirNumero = (referencia) => {
      referencia.current.innerHTML += `<li>El número aleatorio es este ${obtenerNumeroAleatorio()}.</li>`;
  }
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
