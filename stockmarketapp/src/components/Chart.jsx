import { useState,useEffect,useContext } from "react"
import ThemeContext from "../components/ThemeContext"
import StockContext from "../components/StockContext"
import Cards from "./Cards"
import{AreaChart, XAxis,YAxis,Tooltip, ResponsiveContainer, Area} from "recharts"
import { converUnixTimeSatmpToDate } from "../helper/dataHelper"
import ChartFilter from "./ChartFilter"

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
    },[stockSymbol, filter])
  return (
    
    <Cards>
        <ul className="filters">
            { ojects.keys(chartConfig).map(  (item) =>(
                <li key={item}>
                    <ChartFilter
                    text={item}
                    active={filter === item}
                    onclick={ () =>{ setFilter(item)}}
                    />

                </li>
            )    )}
        </ul>

        <ResponsiveContainer>
            <AreaChart>
                <defs>
                    <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                        <stop
                           offset="5%"
                           stopColor={darkMode? "#312e82" : "rgb( 199 210 254)"}
                        />
                        <stop offset="95%" stopColor={darkMode? "#312e82" : " rgb( 199 210 254)"} />
                    </linearGradient>
                </defs>
                <Tooltip/>
                <Area
                  type= "monotone"
                  dataKey="value"
                  stroke = "#312e82"
                  fill="url(#chartColor)"
                />
                <XAxis dataKey="date" />
                <YAxis/>
            </AreaChart>
        </ResponsiveContainer>
    </Cards>
  )
}

export default Chart