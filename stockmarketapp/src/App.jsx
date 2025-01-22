

import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import ThemeContext from './components/ThemeContext';
import StockContext from './components/StockContext';



function App() {
const [darkMode, setDarkMode] = useState(false);
const[stockSymbol, setStockSymbol] = useState("MSFT");

  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
     <Dashboard/>
     </StockContext.Provider>
  </ThemeContext.Provider>
    </>
  )
}

export default App
