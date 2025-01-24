import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import StockContext from './StockContext'

const SearchResults = ({result}) => {
  const{darkMode} = useContext(ThemeContext)
  const {setStockSymbol} = useContext(StockContext)
  return (
    <ul className= {`absolute top-12 border-2 w-full rounded-md  h-64 overflow-y-scroll ${darkMode? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark" : "bg-white border-neutral-200 custom-scrollbar"}`}>
        {result.map( (items) =>(
            <li  key={items.symbol}
            
            className= {`flex items-center cursor-pointer p-4 m-2 justify-between rounded-md  ${darkMode? "hover:bg-gray-800" : "hover:bg-neutral-200"} transition duration-300 ease-in-out`}
            onClick={() => setStockSymbol(items.symbol)}
            >
                <span>{ items.symbol}</span>
                <span>{items.description} </span>
            </li>
        ))}
    </ul>
  )
}

export default SearchResults