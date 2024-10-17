import React, { forwardRef } from "react";
import Interprete from "../interprete/Interprete.jsx";
import { generarUuidAleatorio } from "../../../biblioteca/biblioteca.js";

/**
 * Las refs solo pueden ser utilizadas directamente en elementos del DOM (como div, input, etc.) 
 * o en componentes de clase. Cuando quieres usar una ref en un componente funcional, necesitas
 * React.forwardRef para que React pase la ref correctamente.
 */
const Interpretes = forwardRef((props, ref) => {
  const { interpretes } = props;
  return (
    <>
    <div ref={ref} id='interpretes'>
      {interpretes.length
        ? interpretes.map((valor) => {
            return <Interprete key={generarUuidAleatorio()} datos={valor} />;
          })
        : `No se han encontrado intérpretes.`}
    </div>
    </>
  );
});

export default Interpretes;
