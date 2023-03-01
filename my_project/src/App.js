// import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento'
import Form from './components/Form'

function App() {

  return (
    <div className="App"> 
    <h1>Testing Events</h1>
      <Evento number={4}/>
      <Form/>
    </div>
   
  );
}

export default App;



