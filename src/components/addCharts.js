import React from 'react'
import {editData} from '../actions/chartData';
import {addChart} from '../actions/charts';
import {connect} from 'react-redux';

const addCharts = (props) => {

  return (
    <div>
        <form action="">
            <label htmlFor="">Chart Title</label>
            <input type="text" onChange={(e)=>{
                props.chart.title = e.target.value;
                props.dispatch(editData(props.chart))
            }}/>
            <br />
            <label htmlFor="">Chart Subtitle</label>
            <input type="text" onChange={(e)=>{
                props.chart.subtitle = e.target.value;
                props.dispatch(editData(props.chart))
            }}/>
            <br />
            <label htmlFor="">X Title</label>
            <input type="text" onChange={(e)=>{
                props.chart.xTitle = e.target.value;
                props.dispatch(editData(props.chart))
            }}/>
            <br />
            <label htmlFor="">Y Title</label>
            <input type="text" onChange={(e)=>{
                props.chart.yTitle = e.target.value;
                props.dispatch(editData(props.chart))
            }}/>
            <br />
            {props.chart.data.map((e,i)=>{
                return(
                <div key={i}>
                    <label htmlFor="">Add Key</label>
                    <input type="text"onChange={(a)=>{
                        e.key = a.target.value;
                        props.dispatch(editData(props.chart))
                    }} />
                    <label htmlFor="">Add value</label>
                    <input type="text" onChange={(a)=>{
                        e.data = a.target.value;
                        props.dispatch(editData(props.chart))
                    }}/>
                    <button onClick={(a)=>{
                        a.preventDefault()
                        props.chart.data.splice(i,1);
                        props.dispatch(editData(props.chart))
                    }}>del</button>
                </div>)
                
            })}
            
            <button onClick={(e)=>{
                e.preventDefault();
                props.chart.data.push({key:"",data:""})
                props.dispatch(editData(props.chart))
            }}>Add New Data</button>

            <button onClick={(e)=>{
                e.preventDefault();
                console.log();
                props.dispatch(addChart(props.chart))
            }}>
                add new chart
            </button>
        </form>
    </div>
  )
}


const mapStateToProps = (state,props) => {
    
    return {
        chart: state.chartData
    }
}

export default connect(mapStateToProps)(addCharts);