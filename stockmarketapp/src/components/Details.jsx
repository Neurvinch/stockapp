import React ,{useContext} from 'react'
import Cards from './Cards';
import ThemeContext from './ThemeContext';


const Details = ({details}) => {
    const {darkMode} = useContext(ThemeContext)

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
        <ul className={`w-full h-full flex flex-col justify-between divide-y-2 ${darkMode? "divide-gray-800" : null }`}>
            { Object.keys(detailsList).map( (item) =>(
                <li key={item} className='flex-1 flex   justify-between items-center' >
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