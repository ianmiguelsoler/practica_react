import Pelicula from '../pelicula/Pelicula.jsx';

const Peliculas = (props) => {
  const { listado } = props;
  return (
    <>
    <div className="peliculas">
    {listado.length
          ? listado.map((pelicula) => {
              return (
                <Pelicula
                nombre={pelicula.nombre}
                cartelera={pelicula.cartelera}
                director={pelicula.director}
                actores={pelicula.actores}
                >
                  {pelicula.resumen}
                </Pelicula>
              );
            })
          : (
        <p>No hay películas disponibles</p>
      )}
    </div>
    </>
  );
};

export default Peliculas;
