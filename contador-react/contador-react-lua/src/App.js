// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ProdutosPage from './components/ProductsPage';
import LoginPage from './components/LoginPage';

function App() {
  const [token, setToken] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: 'usuario@example.com',
        password: 'senha123',
      });
      setToken(response.data.token);
    } catch (error) {
      if (error.response) {
        console.error('Erro no login:', error.response.data);
      } else if (error.request) {
        console.error('Erro no login: Sem resposta do servidor');
      } else {
        console.error('Erro no login:', error.message);
      }
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
        </nav>

        <Routes>
          <Route
            path="/produtos"
            element={token ? <ProdutosPage /> : <Navigate to="/" />}
          />
          <Route path="/" element={<LoginPage login={login} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
