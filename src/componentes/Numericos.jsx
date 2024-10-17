import { useRef } from "react";

const Numericos = () => {
    
    const refe = useRef(null);

    const obtenerNumeroAleatorio = () => {
        return Math.floor(Math.random() * 1000) + 1;
    };

    return (
        <>
            <div>
                <button onClick={() =>{
                  refe.current.innerHTML += `<li>El número aleatorio es este ${obtenerNumeroAleatorio()}.</li>`;
                }}>Añadir numerico</button>
                <ol ref={refe}></ol>
            </div>
        </>
    );
}

export default Numericos;
