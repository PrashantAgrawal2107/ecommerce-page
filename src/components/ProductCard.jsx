import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-xl font-bold text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;