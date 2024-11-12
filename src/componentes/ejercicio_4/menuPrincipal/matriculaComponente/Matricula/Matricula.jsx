import React, { useState } from 'react';
import Discente from '../Discentes/Discentes.jsx';
import Filtros from '../Filtros/Filtros.jsx';
import { 
    filtrar2DAW, 
    filtrarPrimerCurso, 
    filtrarCicloDAW, 
    filtrarLectura, 
    reiniciarListado,
    ordenarPorApellido,
    generarUuidAleatorio
} from '../../../../../biblioteca/biblioteca.js';
import './Matricula.css';



const Matricula = ({ listado }) => {

    //! Variables
    const [discentes, setDiscentes] = useState(listado);
    const [filteredDiscentes, setFilteredDiscentes] = useState(listado);

    // Objeto de acciones.
    const acciones = {
        filtrar2DAW: () => setFilteredDiscentes(filtrar2DAW(discentes)),
        filtrarPrimerCurso: () => setFilteredDiscentes(filtrarPrimerCurso(discentes)),
        filtrarCicloDAW: () => setFilteredDiscentes(filtrarCicloDAW(discentes)),
        filtrarLectura: () => setFilteredDiscentes(filtrarLectura(discentes)),
        reiniciarListado: () => setFilteredDiscentes(reiniciarListado(discentes)),
        ordenarPorApellido: (ascendente) => {
            const ordenados = ordenarPorApellido(ascendente, filteredDiscentes);
            setFilteredDiscentes(ordenados);
        },
    };
    

    // Función para eliminar un discente.
    const eliminarDiscente = (id) => {
        setFilteredDiscentes(prev => prev.filter(d => d.id !== id));
    };

    return (
        <div className="matricula-container">
            <div className="filtros-container">
                <Filtros acciones={acciones} />
            </div>
            <ul className="discentes-list">
                {filteredDiscentes.length ? (
                    filteredDiscentes.map((discente) => (
                        <li className="discente-item" key={generarUuidAleatorio()}>
                            <Discente discente={discente} eliminarDiscente={eliminarDiscente} />
                        </li>
                    ))
                ) : (
                    <p>No existen Discentes todavía</p>
                )}
            </ul>
        </div>
    );
};

export default Matricula;
