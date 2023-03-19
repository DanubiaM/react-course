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
      <Card/>     
    </div>
  );
}

export default App;
