import "./films.page.css"
import React, { useEffect, useState } from "react"
import filterFilmsByDirector, { getListOf } from "../helpers/film.helpers";

export default function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
    .then(res => res.json())
    .then(data => setList(data))
    .catch(error => console.error(error));
  }

  useEffect(() => getFilms(),[]);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");

  return (
    <div className="films-list-container">
      <div className="films-list-header">
        <h1>Studio Ghibli Films</h1>
        <form>
          <div className="form-group">
            <label htmlFor="searchDirector">Filter By Director: </label>
            <select 
              id="searchDirector"
              name="searchDirector"
              value={searchDirector} 
              onChange={e => setSearchDirector(e.target.value)}
            >
              <option value="">All</option>
              {directors.map((director, id) => {
                  return (
                    <option key={director+id} value={director}>{director}</option>
                  )
                })
              }
            </select>
          </div>
        </form>
      </div>
      <ul className="list-with-pic remove-bullet">
        {filmsByDirector.map((film) => {
          return (
            <li key={film.id} className="max-width-and-center">
              <img className="movie-banner" src={film.image} alt="movie banner" />
              <p>{`${film.title} (${film.release_date})`}</p>
              <p>{`Producer: ${film.producer}`}</p>
              <p>Description:</p>
              <p>{film.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}