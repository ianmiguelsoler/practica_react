import './Menu.css';
import React from "react";
import { Link } from "react-router-dom";

const Menu = ( ) => {
  
  return (
    <>
      <nav>
        <Link className='menu-elemento' to='/'>
          Inicio
        </Link>
        <Link className='menu-elemento' to='/acerca-de'>
          Acerca De
        </Link>
        <Link className='menu-elemento' to='/contacto'>
          Contactos
        </Link>
        <Link className='menu-elemento' to='/peliculas'>
          Películas
        </Link>
        <Link className='menu-elemento' to='/productos'>
          Productos
        </Link>
      </nav>
    </>
  );
};

export default Menu;