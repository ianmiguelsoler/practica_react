import React from "react";
import Interprete from "../interprete/Interprete.jsx";
import { generarUuidAleatorio } from "../../../biblioteca/biblioteca.js";

const Interpretes = (props) => {
  const { interpretes } = props;
  return (
    <>
      <div id='interpretes'>
        {interpretes.length
          ? interpretes.map((valor) => {
              return <Interprete key={generarUuidAleatorio()} datos={valor} />;
            })
          : `No se han encontrado intérpretes.`}
      </div>
    </>
  );
};

export default Interpretes;
