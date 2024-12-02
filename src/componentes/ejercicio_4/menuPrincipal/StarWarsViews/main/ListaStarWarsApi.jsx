import React, { useEffect, useState } from "react";
import "./ListaStarWarsApi.css";

const ListaStarWarsApi = ({ discos }) => {
// Estado inicial y validaciones

const fichero = "https://swapi.dev/api/films";
const valoresIniciales = [];

const erroresIniciales = [];

const [listaPelis, setListaPelis] = useState(valoresIniciales);
const [errores, setErrores] = useState(erroresIniciales);

const obtenerPelicualasStarWars = (url) => {
  return fetch(url)
      .then((respuesta) => {
          if (!respuesta.ok) {
              throw new Error(`Error al obtener datos: ${respuesta.status} ${respuesta.statusText}`);
          }
          return respuesta.json(); // Convertir la respuesta a JSON.
      })
      .catch((error) => {
          console.error(`Error en obtenerDatosStarWars: ${error.message}`);
          return []; // Retorna un array vacío en caso de error.
      });
};

useEffect(()=>{

}, []);

const cargarDatosIniciales = () => {
  obtenerPelicualasStarWars(fichero)
      .then((datos) => {
          return datos.results
      }).then((datos) =>{
          setListaPelis(datos);
          console.log(datos);
      })
      .catch((error) => {
          console.error(`Error en cargarDatos: ${error.message}`);
      });
};

return (
  <div>
    

    {/* Mostrar el componente Errores */}
    <Errores errores={errores} />

    {/* Mostrar la lista de discos */}
    <ListaDiscos discos={discos} />
  </div>
);
};

export default ListaStarWarsApi;
