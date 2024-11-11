import './Listado.css';
import React, { useState } from "react";
import { generarUuidAleatorio, obtenerNumeroAleatorioSinRepetir } from "../../../../biblioteca/biblioteca.js";
import ObjetosListados from './ObjetoListado/ObjetosListados.jsx';

const Listado = () => {
  const listadoInicial = [];
  const [listado, setListado] = useState(listadoInicial);

  const generarListado = () => {
    let nuevoObjeto = obtenerNumeroAleatorioSinRepetir(listado);
    setListado([...listado, nuevoObjeto]);
  };

  const eliminarListado = () => {
    setListado(listadoInicial);
  };

  return (
    <div className="contenedor-fotografia">
      <p>
        <button onClick={generarListado}>Generar</button>
        <button onClick={eliminarListado}>Eliminar</button>
      </p>
      <div>
        <p>Listado de objetos generados:</p>
      </div>
      <div className="interprete-textos">
        <ObjetosListados listado={listado} />
      </div>
    </div>
  );
};

export default Listado;
