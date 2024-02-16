// RentalForm.js
import React, { useState } from 'react';

function RentalForm() {
  const [cidadeRetirada, setCidadeRetirada] = useState('');
  const [cidadeDevolucao, setCidadeDevolucao] = useState('');
  const [dataHoraRetirada, setDataHoraRetirada] = useState('');
  const [dataHoraDevolucao, setDataHoraDevolucao] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com os dados do formulário
    console.log({
      cidadeRetirada,
      cidadeDevolucao,
      dataHoraRetirada,
      dataHoraDevolucao,
    });
  };

  return (
    <div className="rental-form">
      <h2>Retirar o Carro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Informe uma cidade ou aeroporto para retirada:
          <input
            type="text"
            value={cidadeRetirada}
            onChange={(e) => setCidadeRetirada(e.target.value)}
          />
        </label>

        <label>
          Devolver em outra cidade:
          <input
            type="text"
            value={cidadeDevolucao}
            onChange={(e) => setCidadeDevolucao(e.target.value)}
          />
        </label>

        <label>
          Data e hora de retirada:
          <input
            type="text"
            value={dataHoraRetirada}
            onChange={(e) => setDataHoraRetirada(e.target.value)}
          />
        </label>

        <label>
          Data e hora de devolução:
          <input
            type="text"
            value={dataHoraDevolucao}
            onChange={(e) => setDataHoraDevolucao(e.target.value)}
          />
        </label>

        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
}

export default RentalForm;
