import { Boton } from './Boton';
import { Pantalla } from './Panta';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { Githublink } from './GithubLink'
import { BrowserRouter } from 'react-router-dom'
function App() {
  const [input, setInput] = useState('');

  const agregarValor = (val) => {
    setInput(input + val);
  };

  const calcular = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Digite un numero');
    }
  };
  const press = (e) => {
    // e.preventDefault();
    if (e.key === 'Enter') {
      calcular();
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Githublink/>
      </BrowserRouter>
      <div className="container-calculadora" onKeyDown={press}>
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarValor}>7</Boton>
          <Boton manejarClick={agregarValor}>8</Boton>
          <Boton manejarClick={agregarValor}>9</Boton>
          <Boton manejarClick={agregarValor}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarValor}>4</Boton>
          <Boton manejarClick={agregarValor}>5</Boton>
          <Boton manejarClick={agregarValor}>6</Boton>
          <Boton manejarClick={agregarValor}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarValor}>1</Boton>
          <Boton manejarClick={agregarValor}>2</Boton>
          <Boton manejarClick={agregarValor}>3</Boton>
          <Boton manejarClick={agregarValor}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarValor}>0</Boton>
          <Boton manejarClick={agregarValor}>.</Boton>
          <Boton manejarClick={calcular}>=</Boton>
          <Boton manejarClick={agregarValor}>+</Boton>
        </div>
        <div className="fila-clear">
          <Boton manejarClick={() => setInput('')}>clear</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
