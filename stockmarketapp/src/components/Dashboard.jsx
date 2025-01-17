import React from 'react'
import Cards from './Cards'
import Header from './Header'
import { mockCompanyDetails } from '../constants/mock'
import Search from './Search'

const Dashboard = () => {
  return (
    <div className='h-screen grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  grid-rows-8 md:grid-rows-7 xl:grid-rows-5 '>
       <div className='col-span-1 md:col-span-2  xl:col-span-3 row-span-1  flex justify-start items-center'>
        <Header name={mockCompanyDetails.name} />
       
        </div> 

        <div  className='row-span-4 md:col-span-2'
        ><Cards> Chart </Cards></div>

        <div>
              <Cards> Overview </Cards>
        </div>
        
      <div
      className='row-span-2 xl:row-span-3'><Cards>Details </Cards></div>
        
    </div>
  )
}

export default Dashboard