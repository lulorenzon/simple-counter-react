//
import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>Loja de Produtos</h1>
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} />
      ) : (
        <ProductList onSelectProduct={handleProductSelect} />
      )}
    </div>
  );
};

export default App;

