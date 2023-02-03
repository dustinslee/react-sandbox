import "./films.page.css";
import React, { useEffect, useState } from "react";
import filterFilmsByDirector, { getListOf, getFilmStats } from "../helpers/film.helpers";
import { Link } from "react-router-dom";

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
  let {avg_score, total, latest} = getFilmStats(list);

  return (
    <div className="films-list-container">
      <div className="films-list-header">
        <h1>Studio Ghibli Films</h1>
        <div>
          <div>
            <span># Of Films: </span>
            <span>{total}</span>
          </div>
          <div>
            <span>Average Rating: </span>
            <span>{avg_score.toFixed(2)}</span>
          </div>
          <div>
            <span>Latest Film: </span>
            <span>{latest}</span>
          </div>
        </div>
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
            <li key={film.id} className="film-list-container">
              <Link to={`/films/${film.id}`}>
                <img src={film.image} alt="movie banner" />
                <p>{`${film.title} (${film.release_date})`}</p>
              </Link>
            </li>
          )
        })}
        {list.length === 0 && <p className="loading">Loading...</p>}
      </ul>
    </div>
  );
}