import React from 'react';

const Discente = ({ discente, eliminarDiscente }) => {
    return (
        <li onClick={() => eliminarDiscente(discente.id)}>
            {discente.nombre} {discente.apellidos} - {discente.curso} - {discente.ciclo}
        </li>
    );
};

export default Discente;
