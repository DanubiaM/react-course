import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Lista from './components/Lista';

function App() {

  const name = "Danubia"

  function sum(a,b){
    return a+b
  }

  return (
    <div className="App">
      <Card/>
      <Lista/>
      <Lista/>
    </div>
  );
}

export default App;
