import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <p>ID: {product.id}</p>
      <p>Nome: {product.name}</p>
      <p>Preço: R${product.price.toFixed(2)}</p>
      <p>Descrição: Descrição do produto aqui.</p>
      <button onClick={() => alert('Adicionar ao carrinho')}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductDetails;
