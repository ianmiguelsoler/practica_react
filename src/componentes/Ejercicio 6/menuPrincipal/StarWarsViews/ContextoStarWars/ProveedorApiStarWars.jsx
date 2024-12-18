import React, { createContext } from "react";
import useApiStarWars from "../Hooks/useApiStarWars.jsx";

// Crear contexto.
const contextoPeliculas = createContext();

const ProveedorPlanetas = ({ children }) => {
  // Valores exportados usando el hook personalizado. Utilizando directamente el spread operator ahorramos
  //  el desglosarlo para pasarlo y volverlo a encapsular.
  const datosaExportar = {
    ...useApiStarWars(),
  };
  //Pasamos todos por children y todas las variables por el value.
  return (
    <contextoPeliculas.Provider value={datosaExportar}>
      {children}
    </contextoPeliculas.Provider>
  );
};

export default ProveedorPlanetas;
export { contextoPeliculas };
