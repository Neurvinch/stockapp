import React from 'react'
import Search from './Search'

const Header = ({name}) => {
  return (
    <>
    <header className=' xl:px-32' >
      <h1 className='text-5xl'
      >{name}</h1>
            <Search/>        
    </header>
    </>
  )
}

export default Header