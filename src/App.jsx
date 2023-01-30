import { Component } from 'react';
import FilmsList from './components/filmsList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      text: ""
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.setState({
      list: [...this.state.list, this.state.text],
      text: ""
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TO-DO List</h1>
        <form onSubmit={this.onSubmit}>
        <label htmlFor="listInput">Add Something: &nbsp;</label>
        <input 
          id="listInput"
          type="text"
          name="listInput" 
          maxLength="40"
          value={this.state.text}
          onChange={(e) => {
            this.setState({
              text: e.target.value
            })
          }}/>
        &nbsp;
        <button type="submit">&nbsp;Add</button>
      </form>
          <ul className="list">
              {this.state.list.map((item, id) => {
                return <li key={item + id}>{item}</li>;
              })}
          </ul>
          <h2>Studio Ghibli Films</h2>
          <FilmsList />
      </div>
    );
  }
}

export default App;