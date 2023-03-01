// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {

  const name = 'Alexsandro'
  const newname = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>My first app</p>
      <p>hello {newname}</p>
      <p>Sum: {sum(1,2)}</p>
      <img src={url} alt="my image"/>
      <HelloWorld/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
