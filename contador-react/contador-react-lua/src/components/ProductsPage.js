// ProductsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductsPage() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/produtos', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao obter produtos:', error.message);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto._id}>
            <img src={produto.imagem} alt={produto.titulo} />
            <h3>{produto.titulo}</h3>
            <p>{produto.descricao}</p>
            <p>Preço: R$ {produto.preco.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
