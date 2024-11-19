import React, { useEffect } from "react";
import "./ListaDiscos.css";

const ListaDiscos = ({ discos }) => {
  useEffect(() => {}, [discos]);

  return (
    <div className="lista-discos-container">
      <h2 className="lista-discos-title">Lista de Discos</h2>
      {discos.length === 0 ? (
        <p className="lista-discos-empty">No hay discos guardados.</p>
      ) : (
        <ul className="lista-discos-list">
          {discos.map((disco, index) => (
            <li key={index} className="lista-discos-item">
              <strong>{disco.nombreDisco}</strong> - {disco.grupoMusica} (
              {disco.anoPublicacion}) - {disco.tipoMusica} [{disco.localizacion}]
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaDiscos;
