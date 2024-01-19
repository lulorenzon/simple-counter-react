import React from 'react';

const ProductList = ({ onSelectProduct }) => {
  const products = [
    { id: 1, name: 'Produto 1', price: 19.99 },
    { id: 2, name: 'Produto 2', price: 29.99 },
    { id: 3, name: 'Produto 3', price: 39.99 },
  ];

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => onSelectProduct(product)}>
            {product.name} - R${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
