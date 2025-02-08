import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'

function SearchBookDiv() {
  //useState renders better if we put all the data inside an object
  const [book, setBook] = useState({
    "title": "",
    "authorName": "",
    "publishYear": null,
    "subject": "",
    "publisher": ""
  });
  //This is the state to handle the initial state of the search
  const [searchTerm, setSearchTerm] = useState("");  

  const fetchBook = async () => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);
      setBook(response.data);
      console.log(response);
    } catch(error) {
      console.error("An error occurred:", error);  
    }
  };
  //when the user digits his/her query, the updated state is stored in the setSearchTerm function. It sinchronizes the state IRL
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='bg-orange-600 h-auto w-1/2 mx-auto p-4 flex flex-col justify-evenly items text-center mt-5
      rounded-lg shadow-md shadow-slate-800'>
      <h1 className='md:text-xl lg:text-2xl md:text-wrap uppercase font-bold text-white'>Search for your fantasy book!</h1>
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row justify-evenly items-center text-center sm:p-3 md:p-2 lg:p-2 mt-3'>
        <input 
          type="text" 
          value={searchTerm}
          onChange={handleInputChange}
          className='flex-1 p-2 sm:p-2 md:p-2 lg:p-1 border-2 border-double border-black'
        />
        <button 
          className='text-black p-2 sm:p-2 md:p-2 lg:p-1 rounded-md bg-yellow-300 mt-2 lg:mt-0 lg:ml-1' 
          onClick={fetchBook}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBookDiv