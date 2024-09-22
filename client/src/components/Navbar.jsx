import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const Navbar = ({ setState, state }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = _.debounce((term) => {
    if (term.trim() === '') {
      setSuggestions([]);
      return;
    }

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const matches = todos.filter(todo => 
      todo.text.toLowerCase().includes(term.toLowerCase())
    );
    setSuggestions(matches);
  }, 300);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='bg-rose-500 w-full h-[8vh] flex justify-between items-center'>
      <h1 className='text-white font-serif font-bold p-4 '>SIMPLE TODO</h1>
      <div className='relative'>
        <input
          type='text'
          className='w-[40vw] h-10 px-10 outline-none'
          placeholder='Search your todos...'
          value={searchTerm}
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <ul className='absolute bg-white w-[40vw] mt-1 max-h-40 overflow-y-auto'>
            {suggestions.map((todo, idx) => (
              <li key={idx} className='px-4 py-2 border-b border-gray-200'>
                {todo.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      <h1
        className='mr-4 px-2 text-white border border-white cursor-pointer'
        onClick={setState}
      >
        {state ? 'Cancel' : 'Add Todo'}
      </h1>
    </div>
  );
};

export default Navbar;
