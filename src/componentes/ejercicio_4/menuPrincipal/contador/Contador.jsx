import './Contador.css';
import React, { useEffect, useState } from "react";

const Contador = () => {
  const contadorInicial = 0;
  const [contador, setContador] = useState(contadorInicial);
  const [contadorMostrar, setContadorMostrar] = useState(contadorInicial);


  useEffect(() => {
    // Inicializa el color de fondo al montar el componente.
    const contarClicks = () => {
      setContador((contador) => {
        return contador + 1;
      });
    }

    // Añade el evento al documento
    document.addEventListener("click", contarClicks);

    // Limpia el evento cuando el componente se desmonta.
    return () => {
      document.removeEventListener("click", contarClicks);
      console.log(`Se ha quitado el evento del Cambio de color.`);
    };
  }, []); // Se ejecuta solo al montar y desmontar el componente.

  useEffect(() => {
    // Actualiza contadorMostrar solo cuando contador es múltiplo de 5.
    if (contador % 5 === 0 && contador !== 0) {
      setContadorMostrar(contador);
    }
  }, [contador]);
  
 
  return (
    <div className="contenedor-fotografia">
      <p className="localizador-coordenadas">
        Estimado usuario/a, has pulsado <code>{contadorMostrar}</code> veces el ratón.
      </p>
    </div>
  );
};

export default Contador;
