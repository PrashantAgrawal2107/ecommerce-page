import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';

// Sample data with images and additional categories
const productsData = [
  { id: 1, name: 'Red Dress', category: 'Dress', price: 50, image: 'https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Blue Jeans', category: 'Pants', price: 40, image: 'https://images.unsplash.com/photo-1541840031508-326b77c9a17e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoaW5nfGVufDB8fDB8fHww' },
  { id: 3, name: 'Green T-Shirt', category: 'Shirt', price: 30, image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D' },
  { id: 4, name: 'Black Jacket', category: 'Jacket', price: 80, image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D' },
  { id: 5, name: 'White Sneakers', category: 'Shoes', price: 60, image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHww' },
  { id: 6, name: 'Yellow Skirt', category: 'Dress', price: 45, image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 7, name: 'Gray Sweatshirt', category: 'Jacket', price: 55, image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8fDB8fHww' },
  { id: 8, name: 'Brown Boots', category: 'Shoes', price: 70, image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8fDB8fHww' },
  { id: 9, name: 'Striped Shirt', category: 'Shirt', price: 35, image: 'https://images.unsplash.com/photo-1550344071-13ecada2a91d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNsb3RoaW5nfGVufDB8fDB8fHww' },
  { id: 10, name: 'Purple Scarf', category: 'Accessories', price: 20, image: 'https://plus.unsplash.com/premium_photo-1674625943116-5f7eeed92917?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNsb3RoaW5nfGVufDB8fDB8fHww' },
];

function App() {
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState('priceLowToHigh');

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = productsData
    .filter(product => {
      const priceRange = filters.priceRange?.split('-').map(Number);
      const productPrice = product.price;

      const isInCategory = filters.category ? filters.category === product.category : true;
      const isInPriceRange = priceRange ? (productPrice >= priceRange[0] && productPrice <= priceRange[1]) : true;

      return isInCategory && isInPriceRange;
    })
    .sort((a, b) => {
      if (sortOption === 'priceLowToHigh') {
        return a.price - b.price;
      } else if (sortOption === 'priceHighToLow') {
        return b.price - a.price;
      } else if (sortOption === 'nameAtoZ') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'nameZtoA') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

  return (
    <div className="flex">
      <Sidebar onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;