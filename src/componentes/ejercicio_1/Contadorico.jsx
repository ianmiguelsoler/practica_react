import { useRef } from "react";
import './Contadorico.css';
import { cambiarColorParrafo } from "../../biblioteca/biblioteca.js";

const Contador = () => {
    
    const refe = useRef(null);

    const incrementar = (referencia) =>{
        let numeroSumado = parseInt(referencia.current.innerHTML) + 1;
        return referencia.current.innerHTML = numeroSumado;
    };
    const decrementar = (referencia) =>{
        var resultado = 0
        if(parseInt(referencia.current.innerHTML) > 0){
             var numeroSumado = parseInt(referencia.current.innerHTML) - 1
             resultado = referencia.current.innerHTML = numeroSumado
        }
        else{
            console.error("No puede haber ningún dato que sea negativo");
        }
       
        return resultado
    };
    return (
        <>
            <div className="elegant-text">
                <button onClick={() =>{
                 incrementar(refe)
                }}>Incrementar</button>
                
                <button onClick={() =>{
                 decrementar(refe)
                }}>Decrementar</button>
                <p ref={refe}>0</p>
            </div>
        </>
    );
}

export default Contador;
