import React, { useEffect, useState } from 'react'
import './filmsList.css'

export default function FilmsList(props) {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
    .then(res => res.json())
    .then(data => setList(data))
    .catch(error => console.error(error));
  }

  useEffect(() => getFilms(),[]);

  return (
    <ul className='list-with-pic remove-bullet'>
      {list.map((film) => {
        return (
          <li key={film.id} className='max-width-and-center'>
            <img className='movie-banner' src={film.image} alt="movie banner" />
            <p>{`${film.title} (${film.release_date})`}</p>
            <p>{`Producer: ${film.producer}`}</p>
            <p>Description:</p>
            <p>{film.description}</p>
          </li>
        )
      })}
    </ul>
  );
}