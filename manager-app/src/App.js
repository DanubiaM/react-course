import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Lista from './components/Lista';
import Button from './components/Button';
import ButtonEvents from './components/eventos/ButtonEvents';

function App() {

  const name = "Danubia"

  function evento(){
    console.log("Fui ativado")
  }

  return (
    <div className="App">
      <Card/>
      <Lista/>
      <Button valor="1"></Button>
      <ButtonEvents event={evento} texto={"HAHAHAHA"}></ButtonEvents>

    </div>
  );
}

export default App;
