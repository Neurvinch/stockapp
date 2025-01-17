import React from 'react'

const SearchResults = ({result}) => {
  return (
    <ul className='absolute top-12 border-2 w-full rounded-md overflow-y-scroll bg-white border-neutral-200'>
        {result.map( (items) =>(
            <li  key={items.symbol}
            
            className='flex items-center cursor-pointer p-4 m-2 justify-between rounded-md hover:bg-indigo-200'>
                <span>{ items.symbol}</span>
                <span>{items.description} </span>
            </li>
        ))}
    </ul>
  )
}

export default SearchResults