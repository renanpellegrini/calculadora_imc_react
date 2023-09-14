import React from 'react';
import './styles.css';

const IMCResult = ({ value }) => {
  const getResultMessage = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    if (imc >= 30 && imc < 34.9) return "Obesidade grau 1";
    if (imc >= 35 && imc < 39.9) return "Obesidade grau 2";
    return "Obesidade grau 3";
  };

  return (
    <div className="imc-result">
      <h2>Resultado IMC</h2>
      <p>
        Seu IMC é: <strong>{value.toFixed(2)}</strong>
      </p>
      <p>
        Classificação: <strong>{getResultMessage(value)}</strong>
      </p>
    </div>
  );
};

export default IMCResult;
