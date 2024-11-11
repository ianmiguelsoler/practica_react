import React, { useState } from 'react';
import Discente from '../Discentes/Discentes.jsx';
import Filtros from '../Filtros/Filtros.jsx';

const Matricula = ({ listado }) => {

    //! Variables
    const [discentes, setDiscentes] = useState(listado);
    const [filteredDiscentes, setFilteredDiscentes] = useState(listado);

     // Objeto de acciones.
     const acciones = {
        filtrar2DAW,
        filtrarPrimerCurso,
        filtrarCicloDAW,
        filtrarLectura,
        ordenarPorApellido,
        reiniciarListado,
    };

    // Funciones de filtrado y acciones
    const filtrar2DAW = () => setFilteredDiscentes(discentes.filter(d => d.curso === '2DAW'));
    const filtrarPrimerCurso = () => setFilteredDiscentes(discentes.filter(d => d.curso.startsWith('1')));
    const filtrarCicloDAW = () => setFilteredDiscentes(discentes.filter(d => d.curso.includes('DAW')));
    const filtrarLectura = () => setFilteredDiscentes(discentes.filter(d => d.aficiones.includes('lectura')));
    const reiniciarListado = () => setFilteredDiscentes(discentes);

    // Función de orden
    const ordenarPorApellido = (ascendente = true) => {
        const sorted = [...filteredDiscentes].sort((a, b) =>
            ascendente ? a.apellidos.localeCompare(b.apellidos) : b.apellidos.localeCompare(a.apellidos)
        );
        setFilteredDiscentes(sorted);
    };


    // Función para eliminar un discente.
    const eliminarDiscente = (id) => {
        setFilteredDiscentes(prev => prev.filter(d => d.id !== id));
    };

    return (
        <div>
            <Filtros acciones={acciones} />
            <ul>
                {filteredDiscentes.map(discente => (
                    <Discente key={discente.id} discente={discente} eliminarDiscente={eliminarDiscente} />
                ))}
            </ul>
        </div>
    );
};

export default Matricula;
