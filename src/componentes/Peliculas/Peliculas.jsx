import './Peliculas.css';
import peli from '../../informacionBDD/peliculas.json';
import Pelicula from '../pelicula/Pelicula';

function Peliculas() {
    const peliculas = [...peli.peliculas];
  return (
    <>
   <div>
        {peliculas.length
          ? peliculas.map((valor, i, a) => {
              return (
                <Pelicula
                key={valor.id}
                datos={valor} 
                >
                  {valor.resumen}
                </Pelicula>
              );
            })
          : "No se han encontrado peliculas."}
      </div>
    </>
  );
};

export default Peliculas;