import React, { useState } from "react";

type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
};

const MovieApp = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [flag, setFlag] = useState(false);
  const moviesJsx = movies.map((m) => (
    <li className="list-group-item" key={m.imdbID}>
      <div className="row">
        <div className="col-2">
          <img
            style={{ maxWidth: "150px" }}
            className="img-thumbnail"
            src={m.Poster}
            alt={m.Title}
          />
        </div>
        <div className="col-10">
          <h3>{m.Title}</h3>
        </div>
      </div>
    </li>
  ));

  const submitHandler = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!keyword) return;
    setFlag(true);
    const url = `https://www.omdbapi.com/?apikey=aa9e49f&s=${keyword}`;
    const response = await fetch(url);
    const result = await response.json();
    setMovies(result.Search);
    setFlag(false);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <input
            type="search"
            value={keyword}
            onChange={(e) => {
              return setKeyword(e.target.value);
            }}
            placeholder="SEARCH A MOVIE"
            autoFocus
          />
        </form>
        {flag && (
          <img
            src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
            alt="loading"
          />
        )}
        <ul className="list-group">{moviesJsx}</ul>
      </div>
    </>
  );
};

export default MovieApp;
