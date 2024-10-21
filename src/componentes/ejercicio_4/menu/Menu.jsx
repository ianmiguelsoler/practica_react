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
        <Link className='menu-elemento' to='/interpretes'>
          Intérpretes
        </Link>
        <Link className='menu-elemento' to='/peliculas'>
          Películas
        </Link>
        <Link className='menu-elemento' to='/productos'>
          Galería
        </Link>
      </nav>
    </>
  );
};

export default Menu;