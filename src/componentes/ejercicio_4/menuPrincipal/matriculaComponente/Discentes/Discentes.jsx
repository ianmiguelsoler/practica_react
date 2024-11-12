import React from 'react';
import "./Discentes.css";

const Discente = ({ discente, eliminarDiscente }) => {
    return (
        <li onClick={() => eliminarDiscente(discente.id)}>
            {discente.nombre} {discente.apellidos} - {discente.curso} - {discente.ciclo}
        </li>
    );
};

export default Discente;
