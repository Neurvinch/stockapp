import React, { useState } from 'react'
import { mockResults } from '../constants/mock'
import SearchResults from './SearchResults';

const Search = () => {
const [input,setInput] = useState("");
const[bestResults, setBestResults] = useState(mockResults.result)

const clear = () =>{
    setInput("");
    setBestResults([])
}
const serached=() =>{
    setBestResults(mockResults.result)
}
  return (

    <div className='bg-white flex  items-center my-4 border-2 
    rounded-md relative  z-50 w-96 border-neutral-200 '>
       <input type='text'
       value={input}
       placeholder='search Stocks ...'
       onChange={ (e) =>{
        setInput(e.target.value)
       }}
       className='w-full focus:outline-none  rounded-md px-4 py-2'
       onKeyDown={ (e) =>{
        if(e.key == 'Enter'){
            serached()
       }}
    }
       
       />

       <button 
       onClick={clear}
       className='fill-gray-200 h-4 w-4  mr-10'
       >
        Clear
       </button>
       <button onClick={serached}
        className='fill-gray-200 h-4 w-4 mr-9'
       >
        Search 
       </button>

       {input && bestResults.length > 0 ? <SearchResults result ={bestResults}/> : null}
    </div>
  )
}

export default Search