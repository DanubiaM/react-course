import logo from './logo.svg';
import './App.css';
import Card from './components/Card';


function App() {

  const name = "Danubia"

  function sum(a,b){
    return a+b
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Are don't now {name} 

        <p>{sum(1,2)}</p>
        <Card/>
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
