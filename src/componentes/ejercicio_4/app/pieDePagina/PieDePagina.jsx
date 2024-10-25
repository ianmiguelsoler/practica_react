import './PieDePagina.css';

const PieDePagina = ( props ) => {
    const {children} = props;
  return (
    <>
    <div className="pie-de-pagina">
      <h2> {children}</h2>
    </div>
    </>
  );
};

export default PieDePagina;