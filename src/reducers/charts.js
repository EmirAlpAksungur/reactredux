const chartState = [{
    title:"",
    subtitle:"",
    xTitle:"",
    yTitle:"",
}]

const chartReducer = (state = chartState, action) => {
    switch (action.type) {
        case "ADD_CHART":
            console.log(...state,
                action.chartData);
            return ([
                ...state,
                action.chartData
            ])
        default:
            return state
    }
}

export default chartReducer;