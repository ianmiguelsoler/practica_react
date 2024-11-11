import React from 'react';

const Filtros = ({ acciones }) => {
    return (
        <div>
            <button onClick={acciones.filtrar2DAW}>Filtrar 2DAW</button>
            <button onClick={acciones.filtrarPrimerCurso}>Filtrar Primer Curso</button>
            <button onClick={acciones.filtrarCicloDAW}>Filtrar DAW</button>
            <button onClick={acciones.filtrarLectura}>Filtrar Afición Lectura</button>
            <button onClick={() => acciones.ordenarPorApellido(true)}>Ordenar Ascendente</button>
            <button onClick={() => acciones.ordenarPorApellido(false)}>Ordenar Descendente</button>
            <button onClick={acciones.reiniciarListado}>Reiniciar</button>
        </div>
    );
};

export default Filtros;
