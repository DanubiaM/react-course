import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Lista from './components/Lista';
import Button from './components/Button';

function App() {

  const name = "Danubia"

  function sum(a,b){
    return a+b
  }

  return (
    <div className="App">
      <Card/>
      <Lista/>
      <Button valor="1"></Button>
      <Button valor="2"/>



    </div>
  );
}

export default App;
