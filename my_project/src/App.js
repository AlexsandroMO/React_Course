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
      <HelloWorld/>
    </div>
  );
}

export default App;
