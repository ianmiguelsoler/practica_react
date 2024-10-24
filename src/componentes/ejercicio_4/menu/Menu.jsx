import './Menu.css';
import React from "react";
import { Link } from "react-router-dom";

const Menu = ( ) => {
  
  return (
    <>
      <nav className='navegacion-menu'>
        <Link className='menu-elemento' to='/'>
          Inicio
        </Link>
        <Link className='menu-elemento' to='/interpretes'>
          Intérpretes
        </Link>
        <Link className='menu-elemento' to='/peliculas'>
          Películas
        </Link>
        <Link className='menu-elemento' to='/galeria'>
          Galería
        </Link>
        <Link className='menu-elemento' to='/acerca-de'>
          Acerca de
        </Link>
      </nav>
    </>
  );
};

export default Menu;