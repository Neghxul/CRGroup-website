import React, { useState } from "react";
import axios from "axios";
import '../styles/UnsplashSearch.scss';

const UnsplashSearch = () => {
  const [query, setQuery] = useState(""); // Estado para el término de búsqueda
  const [images, setImages] = useState([]); // Estado para almacenar las imágenes
  const [loading, setLoading] = useState(false); // Estado para manejar la carga

  // Clave de API de Unsplash
  const ACCESS_KEY = "-OhBiTxejNxB6xN2ntnmJUw_tQ2nmXNMd9cJP2Tl9Mg"; // Reemplaza con tu API Key

  // Función para buscar imágenes
  const searchImages = async () => {
    if (!query) return; // Si no hay término de búsqueda, no hacer nada

    setLoading(true); // Activar el estado de carga

    try {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: query, // Término de búsqueda
          per_page: 5, // Número de imágenes a mostrar
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`, // Autenticación con la API Key
        },
      });

      setImages(response.data.results); // Guardar las imágenes en el estado
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false); // Desactivar el estado de carga
    }
  };

  return (
    <div className="unsplash-search">
      <h1>Buscador de Imágenes en Unsplash</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar imágenes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchImages()} // Buscar al presionar Enter
        />
        <button onClick={searchImages} disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.small} alt={image.alt_description} />
            <p>{image.description || "Sin descripción"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnsplashSearch;