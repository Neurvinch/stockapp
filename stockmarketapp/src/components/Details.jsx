import React from 'react'
import Cards from './Cards';

const Details = ({details}) => {

    const detailsList ={
        name : "name",
        country : "country",
        currency : "currency",
        exchange: "exchange",
        ipo : "ipo Date",
        marketCapitalization : "market capitalization",
        finnhubIndustry : "industry",

    }

    const convertMillionstoBillions =( number) =>{
        return ( number/1000).toFixed(2);
    }
  return (
    <Cards>
        <ul>
            { Object.keys(detailsList).map( (item) =>(
                <li key={item} >
                    <span>{detailsList[item]}</span>
                    <span> {item == "marketCaptilization" ?
                      ` ${convertMillionstoBillions(details[item]) }` : details[item]}</span>

                </li>
            ))}
        </ul>
    </Cards>
  )
}

export default Details