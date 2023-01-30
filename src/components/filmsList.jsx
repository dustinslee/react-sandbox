import React, { Component } from 'react'
import './filmsList.css'

export default class FilmsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }

  getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
    .then(res => res.json())
    .then(data => this.setState({list: data}))
    .catch(error => console.error(error));
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <ul className='list-with-pic remove-bullet'>
        {this.state.list.map((film) => {
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
}