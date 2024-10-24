import Pelicula from '../pelicula/Pelicula.jsx';
import { Link, Outlet } from 'react-router-dom';
import './Peliculas.css';
import { generarUuidAleatorio } from "../../../../../biblioteca/biblioteca.js";

const Peliculas = (props) => {
  const { listado } = props;
  //Creo un array con la ruta, la clase que le pondré al link y el texto que tengo que añadir. Así obtengo una mejor escalabilidad.
  const subMenuLinks = [
    { ruta: '/peliculas/interpretes', clase: 'menu-elemento-peliculas', texto: 'Interpretes' },
    { ruta: '/peliculas/director', clase: 'menu-elemento-peliculas', texto: 'Director' },
    { ruta: '/peliculas/titulo', clase: 'menu-elemento-peliculas', texto: 'Título' },
  ];
  
  return (
    <>
    <div className="peliculasDiv">
      <div className='peliculas-navegacion'>
        {/* Añadimos el submenú de navegación con su ruta y añadimos Outlet para que el componente se cargue en ese div que he creado */}
        <nav className='navegacion-menu-nav'>
            {subMenuLinks.map((link) => (
              <Link
                key={generarUuidAleatorio()}
                className={link.clase}
                to={link.ruta}>
                {link.texto}
              </Link>
            ))}
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
