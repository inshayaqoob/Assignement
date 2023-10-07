import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <center>
      <h1 className='main'>Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input}   placeholder="0000" readOnly />
        </div>
        <div className="button-row">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleCalculate}>=</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleClick('.')}>.</button>
        </div>
      </div>
    </center>
  );
}

export default App;
