import React from "react";
import Imagenes from "../imagenes/Imagenes.jsx";
import { generarUuidAleatorio } from "../../../../../biblioteca/biblioteca.js";
import { Link, Outlet } from 'react-router-dom';
import './Galeria.css';


const Galeria = ( props )  => {
  const { galeria } = props;
  
  const subMenuLinks = [
    { ruta: '/galeria/interpretes', clase: 'menu-elemento-galerias', texto: 'Interpretes' },
    { ruta: '/galeria/director', clase: 'menu-elemento-galerias', texto: 'Director' },
    { ruta: '/galeria/titulo', clase: 'menu-elemento-galerias', texto: 'Título' },
  ];

  return (
    <>
      <div className='galeria-navegacion'>
        {/* Añadimos el submenú de navegación con su ruta y añadimos Outlet para que el componente se cargue en ese div que he creado */}
        <nav className='navegacion-menu-nav-galeria'>
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
    <div className="galeria">
      {galeria.length
          ? galeria.map((valor) => {
              return (
                <Imagenes
                key={generarUuidAleatorio()}
                nombre={valor.nombre}
                cartelera={valor.cartelera}
                director={valor.director}
                actores={valor.actores}
                recaudacion={valor.recaudacion}
                >
                </Imagenes>
              );
            })
          : (
        <p>No hay películas disponibles</p>
      )}
    </div>
    </>
   );
};


export default Galeria;
