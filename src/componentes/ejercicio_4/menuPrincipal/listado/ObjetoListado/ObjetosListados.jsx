import './ObjetosListado.css';
import { generarUuidAleatorio } from "../../../../../biblioteca/biblioteca.js";

const ObjetosListados = (props) => {
  const { listado } = props;

  return (
    <div className="contenedor">
      <span className="titulo">Listado de Números Generados Aleatoriamente y Sin Repetir:</span>
      {listado.length ? (
        <div className="lista-numeros">
          {listado.map((item) => (
            <p key={generarUuidAleatorio()}>{item.numero}</p>
          ))}
        </div>
      ) : (
        <span className="mensaje-vacio">No existen listados todavía.</span>
      )}
    </div>
  );
};

export default ObjetosListados;
