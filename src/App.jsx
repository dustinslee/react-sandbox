import { Component } from 'react';
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
        <h1>List</h1>
        <form onSubmit={this.onSubmit}>
        <label htmlFor="text">Make a list: &nbsp;</label>
        <input 
          id="text"
          type="text"
          name="text" 
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
          <ul id="list">
              {this.state.list.map((item, id) => {
                return <li key={item + id}>{item}</li>;
              })}
          </ul>
      </div>
    );
  }
}

export default App;