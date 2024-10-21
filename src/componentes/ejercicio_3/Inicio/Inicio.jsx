import './Inicio.css';

const Inicio = () => {
    
  return (
    <>
    <div>
      <p><h2>Esto es el inicio</h2></p>
       <p className='juntoParrafoLogin'>
        <h3>Escribe tu nombre</h3>
        <input type='text'></input>
       </p>
       <p className='juntoParrafoLogin'>
        <h3>Escribe tu Correo Electrónico</h3>
        <input type='email'></input>
       </p>
    </div>
    </>
  );
};

export default Inicio;
