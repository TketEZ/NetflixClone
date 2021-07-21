import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();

    // if brackets below are empty, this code block only runs once when the page loads
    // but fetchUrl is an external variable being passed to the Row function and pulled into
    // the useEffect (i.e. it is a dependency) and thus useEffect should be re-run every time
    // fetchUrl changes.
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>

      {/* Containers with posters */}
      <div className="row__posters">
        {/* Several row_posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
