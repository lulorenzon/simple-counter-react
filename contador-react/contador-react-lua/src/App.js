import React, { useState } from 'react';
import './App.css';

function App() {
  const [numberCount, setNumberCount] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNumberIncrement = () => {
    setNumberCount(numberCount + 1);
  };

  const handleNumberDecrement = () => {
    if (numberCount > 0) {
      setNumberCount(numberCount - 1);
    }
  };

  const handleChange = (event) => {
    const newUsername = event.target.value.slice(0, 10); // Limite de 10 caracteres
    setUsername(newUsername);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value.slice(0, 8); // Limite de 8 caracteres
    setPassword(newPassword);
  };

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div className="app-container">
      <div className="counters">
        <h1>Contador de Números</h1>
        <div className="counter-actions">
          <button onClick={handleNumberIncrement}>+</button>
          <p>{numberCount}</p>
          <button onClick={handleNumberDecrement}>-</button>
        </div>
      </div>
      <div className="login">
        <h1>Contador de Caracteres no Campo de Login</h1>
        <label htmlFor="username">Nome de Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
          placeholder="Digite seu nome de usuário..."
        />
        <p>
          {username.length}/10 caracteres
        </p>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Digite sua senha..."
        />
        <p>
          {password.length}/8 caracteres
        </p>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default App;
