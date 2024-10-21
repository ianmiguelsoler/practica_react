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
        <Link className='menu-elemento' to='/login'>
          Login
        </Link>
        <Link className='menu-elemento' to='/acerca-de'>
          Acerca de
        </Link>
        <Link className='menu-elemento' to='/peliculas'>
          Películas
        </Link>
        <Link className='menu-elemento' to='/feo'>
          Contacto
        </Link>
      </nav>
    </>
  );
};

export default Menu;