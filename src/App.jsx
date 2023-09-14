import React, { useState } from 'react';
import IMCForm from './components/IMCForm';
import IMCResult from './components/IMCResult';

function App() {
  const [imc, setIMC] = useState(null);

  const calculateIMC = (weight, height) => {
    const result = weight / (height * height);
    setIMC(result);
  };

  return (
    <div className="app-container">
      <h1>Calculadora de IMC</h1>
      <IMCForm onCalculate={calculateIMC} />
      {imc !== null && <IMCResult value={imc} />}
    </div>
  );
}

export default App;
