import {useContext, useState}from 'react'
import {mockHistoricalData} from "../constants/mock"

import Cards from "../components/Cards"
import { AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis ,Area} from "recharts";
import { chartConfig} from "../constants/config"
import ChartFilter from "../components/ChartFilter";
import ThemeContext from './ThemeContext';
import { converUnixTimeSatmpToDate } from '../helper/dataHelper';


const Chart = () => {
    
    const [data,setData] = useState(mockHistoricalData);
    const [filter, setfilter] = useState("1W")
    const {darkMode} = useContext(ThemeContext)

    const formatData = () =>(
        data.c.map( (item , i) =>(
          {
                      value: item.toFixed(2),
                      data : converUnixTimeSatmpToDate(data.t[i]),
            }
        ))
      )
     
        //  useEffect ( () =>{
        //   const getRange  =() =>{
        //    const {days , weeks , months , years} = chartConfig[filter] ;

        //    const endDate = new Date();
        //    const startDate = createDate( endDate, -days, -weeks, -months, -years);

        //    const startTimeStampUnix = convertDateToUnixTimeStamp(startDate);
        //    const endTimeStampUnix = convertDateToUnixTimeStamp(endDate);
        //   return {startTimeStampUnix,endTimeStampUnix};
        //   }


        //   const updateChart =  async () =>{
        //     try { 
        //       const {startTimeStampUnix,endTimeStampUnix} = getRange();
        //      const resolution = chartConfig[filter].resolution;
        //      const result = await fetchHistoricalData(stockSymbol, resolution,startTimeStampUnix,endTimeStampUnix,);
        //      setData(formatData(result)) 
              
        //     } catch (error) {
        //       setData([]);
        //       console.error(error)
        //     }
        //   };
        //   updateChart();
        //  },[ stockSymbol, filter]);

  return (
     <Cards>
        <ul className='flex  absolute top -2 right-2 z-40'>
            {Object.keys( chartConfig).map( (item) =>(
                <li key={item}>
                     <ChartFilter  text = {item} active={filter === item}
                     onclick={() => setfilter(item)} />
                </li>
            ))}

        </ul>
        <ResponsiveContainer>
            <AreaChart data={formatData(data)}>
            <defs>
    <linearGradient id="chartcolor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={darkMode ? "#312E81" : "rgb( 199, 210, 251 )"} stopOpacity={0.8}/>
      <stop offset="95%" stopColor={darkMode ? "#312E81" : "rgb( 199, 210, 251 )"}stopOpacity={0}/>
    </linearGradient>
    
  </defs>
               <Area
                 type="monotone"
                 dataKey = 'value'
                 stroke = '#8884d8'
                 fillOpacity = {1}
                 strokeWidth = {0.5}
                 fill='url(#chartcolor)'
               />
               <Tooltip contentStyle={ darkMode ?{ backgroundColor: "#111827"} : null}
                 itemStyle={ darkMode ?{ color: "#818cf8"} : null}
                 />
               <XAxis dataKey={"date"} />
               <YAxis  domain={["dataMin", "dataMax"]}/>
            </AreaChart>
        </ResponsiveContainer>

     </Cards>
  )
}

export default Chart