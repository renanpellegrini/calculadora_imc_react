import React, { useState } from 'react';
import './styles.css';

const IMCForm = ({ onCalculate }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Você pode adicionar verificações de validação aqui (como garantir que o peso e a altura sejam números positivos).

    onCalculate(parseFloat(weight), parseFloat(height));
  };

  return (
    <div className="imc-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="weight">Peso - kg:</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="height">Altura - m:</label>
          <input
            type="number"
            id="height"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>

        <button type="submit">Calcular</button>
      </form>
    </div>
  );
};

export default IMCForm;
