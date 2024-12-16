import TituloPelicula from "./TituloPelicula/TituloPelicula.jsx";

const TitulosPeliculas = ({ peliculas, manejarClickPelicula }) => {

  // Utilizamos ManejarClickDelegado para delegar el evento click a cada título.
  const manejarClickDelegado = (event) => {
    let elementoClickeado = event.target;

    // Subir al <li> si se hace clic en un hijo como <span>.
    while (elementoClickeado && elementoClickeado.tagName !== "LI") {
      elementoClickeado = elementoClickeado.parentNode;
    }

    // Si encontramos un <li>, obtenemos su índice.
    if (elementoClickeado && elementoClickeado.tagName === "LI") {
      const index = Array.from(elementoClickeado.parentNode.children).indexOf(elementoClickeado);
      manejarClickPelicula(index+1); // Llamar al manejador con el índice correspondiente.
    }
  };

  return (
    <div>
      <h2>Películas de Star Wars</h2>
      <ul  onClick={manejarClickDelegado}>
        {peliculas.length && Array.isArray(peliculas) ? (
          peliculas.map((peli, index) => (
            <TituloPelicula
              key={peli.episode_id}
              pelicula={peli}
              index={index}
            />
          ))
        ) : (
          <li>No se encontraron películas en la base de datos.</li>
        )}
      </ul>
    </div>
  );
};

export default TitulosPeliculas;
