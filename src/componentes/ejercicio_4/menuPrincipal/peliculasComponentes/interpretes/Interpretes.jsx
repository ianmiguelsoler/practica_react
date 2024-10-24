import React, { forwardRef } from "react";
import Interprete from "../interprete/Interprete.jsx";
import { generarUuidAleatorio } from "../../../../../biblioteca/biblioteca.js";


const Interpretes = forwardRef((props, ref) => {
  const { interpretes } = props;
  console.log(interpretes); // Verifica los datos
  return (
    <div ref={ref} id='interpretes'>
      {interpretes.length
        ? interpretes.map((valor) => {
            return <Interprete key={generarUuidAleatorio()} datos={valor} />;
          })
        : `No se han encontrado intérpretes.`}
    </div>
  );
});


export default Interpretes;
