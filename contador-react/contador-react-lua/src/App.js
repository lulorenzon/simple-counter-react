import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import ProductsPage from './components/ProductsPage';  // Ajuste o caminho conforme a sua estrutura de diretórios
import LoginPage from './components/LoginPage';
import ProductCard from './components/ProductCard';

function App() {
  const [token, setToken] = useState('');

// ... Importações e código anterior ...

const produtos = [
  // Preencha este array com os seus produtos
  { titulo: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 19.99, imagem: 'url_imagem1' },
  { titulo: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 29.99, imagem: 'url_imagem2' },
  { titulo: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 29.99, imagem: 'url_imagem2' },
  { titulo: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 29.99, imagem: 'url_imagem2' },

  // Adicione mais produtos conforme necessário
];

const login = async () => {
  try {
    const response = await axios.post('http://localhost:3001/login', {
      email: 'usuario@example.com',
      password: 'senha123',
    });
    setToken(response.data.token);
  } catch (error) {
    if (error.response) {
      // O servidor respondeu com um código de status fora da faixa 2xx
      console.error('Erro no login:', error.response.data);
    } else if (error.request) {
      // A requisição foi feita, mas não houve resposta do servidor
      console.error('Erro no login: Sem resposta do servidor');
    } else {
      // Algo aconteceu ao configurar a requisição que acionou um erro
      console.error('Erro no login:', error.message);
    }
  }
};

// ... Restante do código ...



  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          <Link path="/login"> Login</Link>
        </nav>

        <div className="card-container">
          {produtos.map((produto, index) => (
            <ProductCard key={index} produto={produto} />
          ))}
        </div>

        <Routes>
          <Route
            path="/produtos"
            element={token ? <ProductsPage fetchProdutos={() => {}} produtos={[]} /> : <Navigate to="/" />}
          />
         
        </Routes>
      </div>
    </Router>
  );
}


export default App;