import { useEffect, useState } from "react";
import "./NasaAppPlanetas.css";
import { obtenerDatosApiStarWars, obtenerPeliculaPorId } from "../../../biblioteca/biblioteca.js";

const API_KEY = "e4BUX9LPqSd7Mk4bqdtCBqT0cRv1XLHdoC0qSCOD"; // Reemplaza con tu API key
const NASA_API_URL = "https://images-api.nasa.gov/search";
const DEFAULT_QUERY = "planets"; // Puedes cambiar esta palabra clave según lo que quieras mostrar


const NasaAppPlanetas = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMedia(query);
  }, [query]);

  const fetchMedia = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${NASA_API_URL}?q=${searchQuery}&media_type=image`
      );
      const data = await response.json();
      setMediaItems(data.collection.items || []);
    } catch (error) {
      setError("Error fetching data from NASA API.");
    }
    setLoading(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.query.value;
    if (searchTerm.trim() !== "") {
      setQuery(searchTerm);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Galería Multimedia de la NASA</h1>
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          name="query"
          placeholder="Buscar..."
          style={{ padding: "10px", fontSize: "16px", width: "300px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#0078d7",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Buscar
        </button>
      </form>
      {loading && <p style={{ textAlign: "center" }}>Cargando...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "10px",
        }}
      >
        {mediaItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={item.links[0].href}
              alt={item.data[0].title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <h3 style={{ fontSize: "18px", margin: "10px 0" }}>
                {item.data[0].title}
              </h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {item.data[0].description?.substring(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NasaAppPlanetas;
