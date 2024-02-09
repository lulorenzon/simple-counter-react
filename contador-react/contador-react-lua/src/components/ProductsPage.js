// ProdutosPage.js
import React from 'react';

const ProdutosPage = ({ fetchProdutos, produtos }) => (
  <div>
    {/* Seu conteúdo da página de produtos */}
    <h2>Produtos</h2>
    <button onClick={fetchProdutos}>Obter Produtos</button>
    <ul>
      {produtos.map((produto, index) => (
        <li key={index}>{produto}</li>
      ))}
    </ul>
  </div>
);

export default ProdutosPage;
