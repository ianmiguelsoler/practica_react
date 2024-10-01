import './Interprete.css';

const Interprete = ( props ) => {
    const { nombre , imagen , children } = props;
  return (
    <>
    <div className="contenedor-fotografia">
        <div>
            <img src={imagen} className='estilos-imagen' alt="Imagen de Teemo - Legue of Legends"></img>
        </div>
        <div className="interprete-textos">
            <div className="contenedor-nombre"><h1>{nombre}</h1></div>
            <div className="contenedor-biografia"><h3>{children}</h3></div>
        </div>
    </div>
    </>
  );
};

export default Interprete;
