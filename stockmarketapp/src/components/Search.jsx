import React, { useContext, useState } from 'react'

import SearchResults from './SearchResults';
import ThemeContext from './ThemeContext';
import {searchSymbols} from "../api/stock-api"

const Search = () => {
const [input,setInput] = useState("");
const[bestResults, setBestResults] = useState([])
 const {darkMode} = useContext(ThemeContext)
const clear = () =>{
    setInput("");
    setBestResults([])
}
const updateBestMatches = async  () =>{
  try {

    if(input){
      const SearchResults = await searchSymbols(input)
 const resuls = SearchResults.result
 setBestResults(resuls)
    }
  } catch (error) {
    setBestResults([])
      console.error(error)
  }
}
  return (

    <div className={` flex  items-center my-4 border-2 
    rounded-md relative  z-50 w-96  ${darkMode ? "bg-gray-900 border-gray-800" : " bg-white  border-neutral-200"} `}>
       <input type='text'
       value={input}
       placeholder='search Stocks ...'
       onChange={ (e) =>{
        setInput(e.target.value)
       }}
       className={`w-full focus:outline-none  rounded-md px-4 py-2   ${darkMode ? "bg-gray-900" : null} `}
       onKeyDown={ (e) =>{
        if(e.key == 'Enter'){
            updateBestMatches()
       }}
    }
       
       />

       <button 
       onClick={clear}
       className='fill-gray-200 h-4 w-4  mr-10'
       >
        Clear
       </button>
       <button onClick={updateBestMatches}
        className='fill-gray-200 h-4 w-4 mr-9'
       >
        Search 
       </button>

       {input && bestResults.length > 0 ?( <SearchResults result ={bestResults}/> ): null}
    </div>
  )
}

export default Search