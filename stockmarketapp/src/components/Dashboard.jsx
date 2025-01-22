import React, { useContext } from 'react'

import Header from './Header'
import Overview from './Overview'


import Details from './Details'
import { mockCompanyDetails } from '../constants/mock'
import Chart from './Chart'
import ThemeContext from './ThemeContext'

const Dashboard = () => {
  const{ darkMode} =useContext(ThemeContext)
  return (
    <div className={`h-screen grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10font-quicksand  ${darkMode? "bg-gray-900 text-gray-300" : " bg-neutral-100 "}`}>
       <div className='col-span-1 md:col-span-2  xl:col-span-3 row-span-1  flex justify-start items-center'>
        <Header name={mockCompanyDetails.name} />
       
        </div> 

        <div  className='row-span-4 md:col-span-2'
        >
          <Chart/>
        </div>

        <div>
              <Overview
                 symbol={mockCompanyDetails.ticker} price={400} change={30} changePercent={10.0} 
                 currency= "USD"         />
        </div>
        
      <div
      className='row-span-2 xl:row-span-3'><Details details ={mockCompanyDetails}/></div>
        
    </div>
  )
}

export default Dashboard