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
    const [discentes, setDiscentes] = useState(listado); // Estado inicial con el listado completo de discentes.
    const [discentesFiltrados, setDiscentesFiltrados] = useState(listado); // Estado para almacenar los discentes filtrados.

    // Objeto de acciones que aplica los filtros y ordenamientos sobre los discentes.
    const acciones = {
        filtrar2DAW: () => setDiscentesFiltrados(filtrar2DAW(discentes)), // Filtra los discentes del segundo año DAW.
        filtrarPrimerCurso: () => setDiscentesFiltrados(filtrarPrimerCurso(discentes)), // Filtra los discentes del primer curso.
        filtrarCicloDAW: () => setDiscentesFiltrados(filtrarCicloDAW(discentes)), // Filtra los discentes del ciclo DAW.
        filtrarLectura: () => setDiscentesFiltrados(filtrarLectura(discentes)), // Filtra los discentes que tienen la lectura como afición.
        reiniciarListado: () => setDiscentesFiltrados(reiniciarListado(discentes)), // Reinicia el listado de discentes.
        ordenarPorApellido: (ascendente) => {
            const ordenados = ordenarPorApellido(ascendente, discentesFiltrados); // Ordena los discentes por apellido.
            setDiscentesFiltrados(ordenados); // Actualiza el estado con los discentes ordenados.
        },
    };

    // Función para eliminar un discente específico según su ID.
    const eliminarDiscente = (id) => {
        setDiscentesFiltrados(prev => prev.filter(d => d.id !== id)); // Filtra el listado eliminando el discente con el ID dado.
    };

    return (
        <div className="matricula-container">
            <div className="filtros-container">
                <Filtros acciones={acciones} /> {/* Componente que muestra los botones de filtro y ordenamiento. */}
            </div>
            <ul className="discentes-list">
                {discentesFiltrados.length ? (
                    discentesFiltrados.map((discente) => (
                        <li className="discente-item" key={generarUuidAleatorio()}>
                            <Discente discente={discente} eliminarDiscente={eliminarDiscente} /> {/* Componente de cada discente. */}
                        </li>
                    ))
                ) : (
                    <p>No existen Discentes todavía</p> // Mensaje mostrado cuando no hay discentes en la lista.
                )}
            </ul>
        </div>
    );
};


export default Matricula;
