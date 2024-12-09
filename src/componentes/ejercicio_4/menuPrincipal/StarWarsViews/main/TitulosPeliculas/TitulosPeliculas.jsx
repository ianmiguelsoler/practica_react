import TituloPelicula from "./TituloPelicula/TituloPelicula.jsx";

const TitulosPeliculas = ({ peliculas, manejarClickPelicula }) => {

  // Utilizamos ManejarClickDelegado para delegar el evento click a cada título.
  const manejarClickDelegado = (event) => {
    const elementoClickeado = event.target.closest("li");
    
    if (elementoClickeado) {
      //Le damos los poderes del array a todos los elementos que sean "li" y lo filtramos con indexOf para sacar la posición.
      const index = Array.from(elementoClickeado.parentNode.children).indexOf(elementoClickeado);
      manejarClickPelicula(index + 1); // index + 1 para alinearse con los IDs de las películas
    }
  };

  return (
    <div onClick={manejarClickDelegado}>
      <h2>Películas de Star Wars</h2>
      <ul>
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
