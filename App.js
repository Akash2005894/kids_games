import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [digits, setDigits] = useState([]);

  const calculateSumOfDigits = () => {
    if (number === '') {
      alert('Please enter a number');
      return;
    }

    // Remove negative sign if present and convert to string
    const numString = number.replace('-', '');
    
    // Split into individual digits
    const digitArray = numString.split('').map(d => parseInt(d));
    
    // Calculate sum
    const sum = digitArray.reduce((acc, curr) => acc + curr, 0);
    
    setDigits(digitArray);
    setResult(sum);
  };

  const handleClear = () => {
    setNumber('');
    setResult(null);
    setDigits([]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>🔢 Sum of Digits Calculator</h1>
        <p className="description">Calculate the sum of all digits in a number</p>
        
        <div className="input-section">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            className="input-field"
          />
          <div className="button-group">
            <button onClick={calculateSumOfDigits} className="calc-btn">
              Calculate Sum
            </button>
            <button onClick={handleClear} className="clear-btn">
              Clear
            </button>
          </div>
        </div>

        {result !== null && (
          <div className="result-section">
            <h2>Results</h2>
            
            <div className="breakdown-box">
              <h3>Digit Breakdown</h3>
              <div className="digits-display">
                {digits.map((digit, index) => (
                  <React.Fragment key={index}>
                    <span className="digit-item">{digit}</span>
                    {index < digits.length - 1 && <span className="plus-sign">+</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="result-box">
              <div className="result-label">Sum of Digits</div>
              <div className="result-value">{result}</div>
              <div className="result-info">
                Number of digits: {digits.length}
              </div>
            </div>

            <div className="calculation-box">
              <h3>Calculation</h3>
              <p className="calculation-text">
                {digits.join(' + ')} = <strong>{result}</strong>
              </p>
            </div>
          </div>
        )}

        <div className="info-section">
          <h3>How It Works</h3>
          <p>The sum of digits is calculated by adding all individual digits of a number. </p>
          <div className="example-box">
            <h4>Example: </h4>
            <p className="example-text">Number: 12345</p>
            <p className="example-text">Digits: 1 + 2 + 3 + 4 + 5</p>
            <p className="example-text">Sum: <strong>15</strong></p>
          </div>
          <div className="tip-box">
            <h4>💡 Did you know?</h4>
            <p>A number is divisible by 9 if the sum of its digits is divisible by 9! </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;