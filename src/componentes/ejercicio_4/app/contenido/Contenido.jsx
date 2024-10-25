import './Contenido.css';

const Contenido = ( props ) => {
    const {children} = props;
  return (
    <>
      <h2 className="contenido-app">{children}</h2>
    </>
  );
};

export default Contenido;