import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Card from './components/Card';
import Lista from './components/Lista';
import Button from './components/Button';
import ButtonEvents from './components/eventos/ButtonEvents';
import Condicional from './components/Condicional';
import Home from './components/Home';
import Empresa from './components/Empresa';
import Contato from './components/Contato';
import NavBar from './components/navbar/NavBar';

function App() {

  const name = "Danubia"
 

  function evento(e){
    e.preventDefault()
    console.log("Fui ativado")
  }

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/empresa" element={<Empresa/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </Router>

      <Card/>
      <Lista/>
      <Button valor="1"></Button>
      <ButtonEvents event={evento} texto={"HAHAHAHA"}></ButtonEvents>
      <Condicional/>

    </div>
  );
}

export default App;
