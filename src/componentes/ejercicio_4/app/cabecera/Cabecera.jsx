import './Cabecera.css';

const Cabecera = ( props ) => {
    const {children} = props;
  return (
    <>
    <div className="contenedor-cabecera">
      {children}
    </div>
    </>
  );
};

export default Cabecera;