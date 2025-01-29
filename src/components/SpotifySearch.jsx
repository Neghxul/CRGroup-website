import React, { useState } from "react";
import axios from "axios";
import "../styles/SpotifySearch.scss";

const SpotifySearch = () => {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null); // Track seleccionado

  // Credenciales de la API de Spotify
  const CLIENT_ID = "fff745c700b34c48a460cf8ab4c44f51"; // Reemplaza con tu Client ID
  const CLIENT_SECRET = "b1c0ea18513945d3840c1310555a5d05"; // Reemplaza con tu Client Secret

  // Función para obtener el token de acceso
  const getAccessToken = async () => {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
      }
    );
    return response.data.access_token;
  };

  // Función para buscar canciones
  const searchTracks = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const token = await getAccessToken();
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: query,
          type: "track",
          limit: 10, // Número de resultados
        },
      });

      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error("Error al buscar canciones:", error);
    } finally {
      setLoading(false);
    }
  };

  // Función para seleccionar una canción
  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };

  return (
    <div className="spotify-search">
      <h1>Buscador de Spotify</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Busca una canción..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchTracks()}
        />
        <button onClick={searchTracks} disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      <div className="results">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="track"
            onClick={() => handleTrackSelect(track)}
          >
            <img src={track.album.images[0].url} alt={track.name} />
            <div className="track-info">
              <h3>{track.name}</h3>
              <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Reproductor de Spotify */}
      {selectedTrack && (
        <div className="spotify-player">
          <iframe
            title="Spotify Player"
            src={`https://open.spotify.com/embed/track/${selectedTrack.id}`}
            width="100%"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default SpotifySearch;