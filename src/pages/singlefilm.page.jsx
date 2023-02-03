import "./singlefilm.page.css";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleFilmPage() {
  const [item, setItem] = useState("");
  const {id} = useParams();

  function getFilm() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
    .then(res => res.json())
    .then(data => setItem(data))
    .catch(error => console.log(error));
  }

  // Using async await
  // async function getFilm() {
  //   try {
  //     const res = await fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`);
  //     const data = await res.json();
  //     setItem(data);
  //   } catch(err) {
  //       console.error(err);
  //   }
  // }

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <div className="singlefilm-page-container">
      <div className="singlefilm-page-header">
        <h1>{item.title}</h1>
        <p>{`Original title: ${item.original_title_romanised}`}</p>
        <p>
          <span>{item.release_date}</span> &nbsp;
          <span>{`${item.running_time} mins`}</span>
        </p>
      </div>
      <div className="img-container">
        <img src={`${item.image}`} alt={`${item.title} Poster`} />
      </div>
      <div className="film-info-container">
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
        <p>
          The film was released in <strong>{item.release_date}</strong> and garnered
          a <strong>{item.rt_score}</strong> aggregate score on{" "}
          <a
            id="rotten-tomatoes-link"
            href="https://www.rottentomatoes.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rotten Tomatoes
          </a>
          .
        </p>
        <h2>Description</h2>
        <p id="description-body">{item.description}</p>
      </div>
    </div>
  )
}
