import React, { createContext } from "react";
import useApiStarWars from "../Hooks/useApiStarWars.jsx";

// Crear contexto.
const contextoPeliculas = createContext();

const ProveedorPlanetas = ({ children }) => {
  
 // Valores exportados usando el hook personalizado.
 const datosaExportar = {
  ...useApiStarWars(),
};

  return (
    <contextoPeliculas.Provider value={datosaExportar}>
      {children}
    </contextoPeliculas.Provider>
  );
};

export default ProveedorPlanetas;
export { contextoPeliculas };
