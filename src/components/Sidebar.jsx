import React from 'react';

const Sidebar = ({ onFilterChange, onSortChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="w-1/4 p-6 bg-gray-50 border-r border-gray-200 shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-blue-500 pb-2">Filter & Sort</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Category</h3>
        <select
          name="category"
          onChange={handleFilterChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="Dress">Dress</option>
          <option value="Pants">Pants</option>
          <option value="Shirt">Shirt</option>
          <option value="Jacket">Jacket</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Price Range</h3>
        <select
          name="priceRange"
          onChange={handleFilterChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
        </select>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Sort By</h3>
        <select
          onChange={onSortChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="nameAtoZ">Name: A to Z</option>
          <option value="nameZtoA">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;