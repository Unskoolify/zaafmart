import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchInput);
    // Perform your search logic here
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center pt-2 items-center">
      <div className="w-full xl:w-96">
        <div className="relative w-full">
          <input 
            type="search"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded-l transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search for products, brand and more"
            aria-label="Search"
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button 
            className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-yellow-400 text-white rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            type="button"
            onClick={handleSearch}
          >
            <IoMdSearch/>
          </button>
        </div>
      </div>
    </div>
  );
}
