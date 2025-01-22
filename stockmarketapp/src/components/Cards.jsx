import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Cards = ({children}) => {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={`w-full h-full rounded-md p-8 border-2 ${darkMode? "bg-gray-900 border-gray-800" : " bg-neutral-100  border-gray-300"}`}
    
    >{children}</div>
  )
}

export default Cards