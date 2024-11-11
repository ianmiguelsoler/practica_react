import './Contenido.css';

const Contenido = ( props ) => {
    const {children} = props;
  return (
    <>
    <div className="contenido-app">
      {children}
    </div>
       
    </>
  );
};

export default Contenido;