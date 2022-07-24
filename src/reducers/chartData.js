const chartData = {
    title:"",
    subtitle:"",
    xTitle:"",
    yTitle:"",
    data:[
        {
            key:"",
            data:""
        }
    ]
}


const chartDataReducer = (state = chartData, action) => {
    
    switch (action.type) {
        case "CHART_DATA_UPDATE":
            return action.chartData
        default:
            return state
    }
}

export default chartDataReducer;