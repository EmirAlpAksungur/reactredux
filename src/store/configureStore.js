import { configureStore } from '@reduxjs/toolkit'
import chartReducer from '../reducers/charts'
import chartDataReducer from '../reducers/chartData'
export default configureStore({
  reducer: {
    charts:chartReducer,
    chartData:chartDataReducer,
  },
})