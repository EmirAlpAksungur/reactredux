import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {dataUpdate} from '../reducers/chartData'
import {add} from '../reducers/charts'
const AddCharts = () => {
    const chart = useSelector((state) => state.chartData.value)
    const dispatch = useDispatch()
  return (
    <div>
        <form>
            <label>Chart Title</label>
            <input type="text" value={chart.title} onChange={(e)=>{
                dispatch(dataUpdate(["title",e.target.value]))
            }}/>
            <br />
            <label>Chart Subtitle</label>
            <input type="text" value={chart.subtitle} onChange={(e)=>{
                dispatch(dataUpdate(["subtitle",e.target.value]))
            }}/>
            <br />
            <label>X Title</label>
            <input type="text" value={chart.xTitle} onChange={(e)=>{
                 dispatch(dataUpdate(["xTitle",e.target.value]))
            }}/>
            <br />
            <label>Y Title</label>
            <input type="text" value={chart.yTitle} onChange={(e)=>{
                dispatch(dataUpdate(["yTitle",e.target.value]))
            }}/>
            <br />
            {
            
           chart.data.map((e,i)=>{
                return(
                <div key={i}>
                    <label htmlFor="">Add Key</label>
                    <input type="text" value={chart.data[i].key} onChange={(a)=>{
                        dispatch(dataUpdate(["dataKey",a.target.value,i]))
                    }} />
                    <label htmlFor="">Add value</label>
                    <input type="text" value={chart.data[i].data} onChange={(a)=>{
                         dispatch(dataUpdate(["dataData",a.target.value,i]))
                    }}/>
                    <button onClick={(a)=>{
                        a.preventDefault()
                         dispatch(dataUpdate(["delData","asd",i]))
                        
                       
                    }}>del</button>
                </div>)
                
            })}
            
            <button onClick={(e)=>{
                e.preventDefault();
                dispatch(dataUpdate(["addData"]))
            }}>Add New Data</button>

            <button onClick={(e)=>{
                e.preventDefault();
                dispatch(add(chart))
            }}>
                add new chart
            </button>
        </form>
    </div>
  )
}



export default AddCharts;