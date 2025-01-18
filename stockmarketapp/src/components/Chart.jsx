import { useState,useEffect,useContext } from "react"

import Cards from "./Cards"
import{AreaChart, XAxis,YAxis,Tooltip} from "recharts"
import { converUnixTimeSatmpToDate } from "../helper/dataHelper"

const Chart = () => {
    const[filter,setFilter] = useState("1W")
    const {darkMode} = useContext(ThemeContext)
    const {stockSymbol} = useContext(StockContext);

    const [data,setData] =useState([])

    const formatData = ( data) =>{
        return data.c.map( (item,i) =>(
            { value: item.toFixed(2),
                data : converUnixTimeSatmpToDate(data.t[i])
            }
        ))

    }

    useEffect( () =>{
        const updateData = async ()=>{

            const { startTimeSatmpUnix,  endTimeStampUnix } = getDataRange();

            const response = await fetchHistoricalData(
                stockSymbol,
                startTimeSatmpUnix,
                endTimeStampUnix,
                resolution  
            );

            setData(formatData(result))
            
        } 
        updateData()
    },[])
  return (
    <div>Chart</div>
  )
}

export default Chart