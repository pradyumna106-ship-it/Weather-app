import React,{useState} from 'react';
import {FaSearch} from 'react-icons/fa';
function SesrchBar({ onSearch }) {
    const [value, setValue] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        if (value.trim()) {
            onSearch(value);  // Call parent with trimmed string
        setValue('');     // Clear input
        }
    };
    return (
  <div className="flex flex-col items-center">
    <form 
      onSubmit={handleSearch} 
      className="flex items-center w-full max-w-md p-4 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
    >
      <FaSearch className="text-gray-300 ml-4 text-xl flex-shrink-0" />
      
      <input 
        type="search"
        placeholder="Search for city..." 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        className="
          flex-1 
          bg-transparent 
          border-none 
          outline-none 
          text-white 
          placeholder-gray-300 
          text-lg 
          px-4 py-3
          ml-2
        "
      />
      
      <button 
        type="submit" 
        disabled={!value.trim()}
        className="
          bg-gradient-to-r from-blue-500 to-blue-600 
          hover:from-blue-600 hover:to-blue-700 
          text-white font-semibold px-6 py-3 
          rounded-2xl shadow-lg 
          transition-all duration-200 
          disabled:opacity-50 disabled:cursor-not-allowed
          whitespace-nowrap
        "
      >
        Search
      </button>
    </form>
  </div>
);

}

export default SesrchBar;