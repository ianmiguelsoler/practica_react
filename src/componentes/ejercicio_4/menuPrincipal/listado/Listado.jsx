import './Listado.css';
import React, { useState } from "react";
import { generarUuidAleatorio, obtenerNumeroAleatorioSinRepetir } from "../../../../biblioteca/biblioteca.js";
import ObjetosListados from './ObjetoListado/ObjetosListados.jsx';

const Listado = () => {
  const listadoInicial = [];
  const [listado, setListado] = useState(listadoInicial);

  // Función para generar un nuevo número aleatorio sin repetir.
  const generarListado = () => {
    let nuevoObjeto = obtenerNumeroAleatorioSinRepetir(listado);
    setListado([...listado, nuevoObjeto]);// Estado para almacenar y actualizar el listado de números generados.
  };
  
  // Función para eliminar todos los números generados y restablecer el listado.
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
        <span>Contador de Números Genereados: <code>{listado.length}</code></span>
        <p>Listado de objetos generados:</p>
      </div>
      <div className="interprete-textos">
        <ObjetosListados listado={listado} />
      </div>
    </div>
  );
};

export default Listado;
