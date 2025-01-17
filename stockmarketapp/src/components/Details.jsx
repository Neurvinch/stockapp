import React from 'react'
import Cards from './Cards';

const Details = () => {

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
            { object.keys(detailsList).map( (item) =>(
                <Li>
                    <span>{detailsList[item]}</span>
                    <span> {item == "marketCaptilization" ?
                      ` ${convertMillionstoBillions(Details[item]) }` : Details[item]}</span>

                </Li>
            ))}
        </ul>
    </Cards>
  )
}

export default Details