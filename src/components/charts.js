import React from 'react'
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useSelector } from 'react-redux'
require("highcharts/modules/accessibility")(Highcharts);
const Charts = () => {
    const chart = useSelector((state) => state.charts.value)

    return (
        <div>
            {
                chart.map((e,i)=>(
                    <HighchartsReact key={i} highcharts={Highcharts}  options={
                        {  
                            title: {
                                text:`${e.title}`
                            },
                            subtitle: {
                                text: `${e.subtitle}`
                            },
                            xAxis: {
                                title: {
                                    text:  `${e.xTitle}`
                                },
                                categories: [...e.data.map((a)=>{
                                    console.log(a.key);
                                   return a.key
                                } )]
                            },
                            yAxis: {
                                title: {
                                    text:  `${e.yTitle}`
                                }
                            },
                            series: [{
                                data: [...e.data.map((a)=>parseInt(a.data))]
                            }],
                        }
                    } />
                ))
            }
           
        
        </div>
    )
}


export default Charts