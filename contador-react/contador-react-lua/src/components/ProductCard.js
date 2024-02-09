// Novo componente ProductCard.js
import React from 'react';

function ProductCard({ produto }) {
  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.titulo} style={{ width: '100%' }} />
      <h3>{produto.titulo}</h3>
      <p>{produto.descricao}</p>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
