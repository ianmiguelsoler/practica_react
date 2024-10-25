import './Contenido.css';

const Contenido = ( props ) => {
    const {children} = props;
  return (
    <>
    <div classNameName="contenido-app">
      {children}
    </div>
       
    </>
  );
};

export default Contenido;