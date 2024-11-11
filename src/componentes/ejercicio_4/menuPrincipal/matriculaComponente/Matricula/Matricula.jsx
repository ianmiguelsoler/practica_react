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
} from '../../../../../biblioteca/biblioteca.js';



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
        ordenarPorApellido: (ascendente) => ordenarPorApellido(ascendente, filteredDiscentes, setFilteredDiscentes),
    };

    // Función para eliminar un discente.
    const eliminarDiscente = (id) => {
        setFilteredDiscentes(prev => prev.filter(d => d.id !== id));
    };

    return (
        <div>
            <Filtros acciones={acciones} />
            <ul>
                {filteredDiscentes.length ? (
                    filteredDiscentes.map((discente) => (
                        <Discente key={discente.id} discente={discente} eliminarDiscente={eliminarDiscente} />
                    ))
                ) : (
                    <p>No existen Discentes todavía</p>
                )}
            </ul>
        </div>
    );
};

export default Matricula;
