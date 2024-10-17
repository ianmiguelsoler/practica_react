import React, {useRef} from "react";

function Numericos() {
    
    const refe = useRef(null);

    const obtenerNumeroAleatorio = () => {
        return Math.floor(Math.random() * 1000) + 1;
    };
    const anadirNumerico = (referencia) => {
        referencia.current.innerHtml += "<li> El número aleatorio es este ${obtenerNumeroAleatorio()}</li>"
    };
  return (
    <>
     <div>
        <button onclick="agregarNumero()">Añadir numerico</button>
        <ol ref={refe}></ol>
     </div>
     
    </>
  );
}

export default Numericos;
