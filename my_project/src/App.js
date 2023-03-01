// import logo from './logo.svg';
import './App.css';
import Frases from './components/Frases'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = 'Keila'

  return (
    <div className="App"> 
    <h1>Test CSS</h1>
      <Frases/>
      <Frases/>
      <SayMyName name="Alexsandro"/>
      <SayMyName name="Vitor"/>
      <SayMyName name={nome}/>
      <Pessoa name="Alexsandro" age="42" prof="Designer" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;



