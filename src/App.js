import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Intro Exercise</h1>
        <p>React is so cool!</p>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library
          for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a 
          community of individual developers and companies. React can be used as a base in the development 
          of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only 
          concerned with state management and rendering that state to the DOM, so creating React applications usually requires 
          the use of additional libraries for routing, as well as certain client-side functionality.
          &nbsp;
          <span>Source:&nbsp;
            <a 
              className="App-link" 
              href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
              target="_blank"
              rel="author"
              >
                Wiki
              </a>
          </span>
        </p>
        <h2>React Frameworks:</h2>
        <ul>
          <li>Next.js</li>
          <li>React Redux</li>
          <li>Chakra UI</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
