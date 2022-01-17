import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMoviesHandler = useCallback(() => {
    async function getMovies() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch("https://swapi.dev/api/films/", {
          method: "GET",
        });
        const list = await res.json();

        if (!res.ok) {
          throw new Error("Somethind wnet wrong!");
        }

        const transformedMovies = list.results.map((movieData) => ({
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        }));
        setMovies(transformedMovies);
      } catch (e) {
        setError(e.message);
      }
      setIsLoading(false);
    }

    getMovies();
  }, []);

  useEffect(() => fetchMoviesHandler(), [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>error</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
