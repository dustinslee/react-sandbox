import { useState } from 'react';
import FilmsList from './components/filmsList';
import './App.css';

export default function App(props) {
  const [list, setList] = useState(["ready","set","go"]);
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    setList([...list, text]);
    setText("");
  }

  return (
    <div className="App">
      <h1>TO-DO List</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="listInput">Add Something: &nbsp;</label>
        <input 
          id="listInput"
          type="text"
          name="listInput" 
          maxLength="40"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}/>
        &nbsp;
        <button type="submit">&nbsp;Add</button>
      </form>
      <ul className="list">
          {list.map((item, id) => {
            return <li key={item + id}>{item}</li>;
          })}
      </ul>
      <h2>Studio Ghibli Films</h2>
      <FilmsList />
    </div>
  );
}