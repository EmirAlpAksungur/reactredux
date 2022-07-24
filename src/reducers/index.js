import { combineReducers } from 'redux'
import visibilityFilter from "./visibilityFilter";
import charts from "./charts";
import chartData from './chartData';


const store = combineReducers({ charts, visibilityFilter, chartData });
export default store
