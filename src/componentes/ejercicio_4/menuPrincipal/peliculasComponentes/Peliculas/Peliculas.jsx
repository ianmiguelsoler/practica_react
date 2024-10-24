import Pelicula from '../pelicula/Pelicula.jsx';
import { generarUuidAleatorio } from "../../../../../biblioteca/biblioteca.js";
import { Link, Outlet } from 'react-router-dom';
import './Peliculas.css';

const Peliculas = (props) => {
  const { listado } = props;
  return (
    <>
    <div className="peliculasDiv">
      <div className='peliculas-navegacion'>
        <nav className='navegacion-menu-nav'>
          <Link
          className='menu-elemento-peliculas'
          to='/peliculas/interpretes'>
          Interpretes
          </Link>
          <Link
          className='menu-elemento-peliculas'
          to='/peliculas/director'>
          Director
          </Link>
          <Link
          className='menu-elemento-peliculas'
          to='/peliculas/titulo'>
          Título
          </Link>
        </nav>
      <div>
        <Outlet/>
      </div>

      
      </div>
    {listado.length
          ? listado.map((pelicula) => {
              return (
                <Pelicula
                key={generarUuidAleatorio()}
                nombre={pelicula.nombre}
                cartelera={pelicula.cartelera}
                director={pelicula.director}
                actores={pelicula.actores}
                recaudacion={pelicula.recaudacion}
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
