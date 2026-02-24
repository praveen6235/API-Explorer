import { useState, useEffect } from "react";

export default function Movies() {

  const API_KEY = "c0809e9f";

  const [search, setSearch] = useState("avengers");
  const [query, setQuery] = useState("avengers");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      });
  }, [query]);

  return (
    <section className="movies-page py-4">

      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">

          <h2 className="fw-bold m-0">
            Movies 🎬
          </h2>

          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2 movie-search"
              placeholder="Search movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              className="btn btn-primary"
              onClick={() => setQuery(search)}
            >
              Search
            </button>
          </div>

        </div>
        <div className="row">

          {movies.map((movie) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={movie.imdbID}
            >

              <div className="card movie-card h-100">

                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x400"
                  }
                  alt={movie.Title}
                  className="movie-img"
                />

                <div className="card-body text-center">
                  <h6>{movie.Title}</h6>
                  <p className="text-muted mb-1">{movie.Year}</p>
                  <small className="badge bg-secondary">
                    {movie.Type}
                  </small>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}