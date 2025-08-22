import React from 'react';

const CategoryTab = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
        isActive 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {category}
    </button>
  );
};

export default CategoryTab; 