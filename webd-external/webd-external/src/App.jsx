import React, { useState } from 'react';

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(null);

  const calculateInterest = (e) => {
    e.preventDefault();
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (p && r && t) {
      const result = (p * r * t) / 100;
      setInterest(result.toFixed(2));
    }
  };

  return (
    <div className="calculator-container">
      <h2>Simple Interest Calculator</h2>
      <form onSubmit={calculateInterest} className="calculator-form">
        <div className="input-group">
          <label>Principal Amount ($)</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Rate of Interest (%)</label>
          <input type="number" step="0.01" value={rate} onChange={(e) => setRate(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Time Period (Years)</label>
          <input type="number" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <button type="submit" className="calc-button">Calculate</button>
      </form>

      {interest !== null && (
        <div className="result-display">
          <h3>Total Interest: ${interest}</h3>
        </div>
      )}
    </div>
  );
};

export default SimpleInterestCalculator;