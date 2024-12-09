import { useEffect, useState } from "react";
import "./NasaApp.css";
import { obtenerDatosApiStarWars, obtenerPeliculaPorId } from "../../../../biblioteca/biblioteca.js";

const NasaApp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Tu clave de API de la NASA
  const NASA_API_KEY = "e4BUX9LPqSd7Mk4bqdtCBqT0cRv1XLHdoC0qSCOD";
  const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

  useEffect(() => {
    // Llamada a la API de la NASA
    const fetchAPOD = async () => {
      try {
        const response = await fetch(APOD_URL);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
        setLoading(false);
      }
    };

    fetchAPOD();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>Astronomy Picture of the Day</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.date}</p>
          {data.media_type === "image" ? (
            <img
              src={data.url}
              alt={data.title}
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          ) : (
            <iframe
              src={data.url}
              title={data.title}
              frameBorder="0"
              style={{ width: "100%", height: "500px", borderRadius: "10px" }}
              allowFullScreen
            ></iframe>
          )}
          <p style={{ marginTop: "20px", padding: "0 10%" }}>{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default NasaApp;
