import { useState } from "react";
function Search(){
    const [searchTerm, setSearchTerm] = useState('');
    const newSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="flex items-center">
          <input
            type="text"
            className="form-input w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Search"
            value={searchTerm}
            onChange={newSearchTerm}
          />
          <button type="submit" className="ml-3 inline-flex items-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-600 active:bg-indigo-700 transition ease-in-out duration-150">
            Search
          </button>
        </div>
      );
    
}

export default Search;