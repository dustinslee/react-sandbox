import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { HomePage, FilmsPage, SingleFilmPage } from './pages';

export default function App(props) {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul>
          <li>
            <span className="fa-solid fa-d"></span>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films" element={<FilmsPage />} />
        <Route path="films/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}