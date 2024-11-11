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
        <Link className='menu-elemento' to='/listado'>
          Listado
        </Link>
        <Link className='menu-elemento' to='/acerca-de'>
          Acerca de
        </Link>
      </nav>
    </>
  );
};

export default Menu;