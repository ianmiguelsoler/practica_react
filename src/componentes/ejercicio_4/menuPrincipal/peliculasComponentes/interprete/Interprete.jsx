import './Interprete.css';

const Interprete = ( props ) => {
    const { nombre , imagen , biografia } = props.datos;
  return (
    <>
    <div className="contenedor-fotografia">
        <div>
            <img src={imagen} className='estilos-imagen' alt={imagen}></img>
        </div>
        <div className="interprete-textos">
            <div className="contenedor-nombre"><h1>{nombre}</h1></div>
            <div className="contenedor-biografia"><h3>{biografia}</h3></div>
        </div>
    </div>
    </>
  );
};

export default Interprete;
