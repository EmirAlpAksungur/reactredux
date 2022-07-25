
import { createSlice } from '@reduxjs/toolkit'

export const chartDataReducer = createSlice({
    name: 'charts',
    initialState: {
      value: {
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
    },
    reducers: {
      dataUpdate: (state,a) => {
        switch(a.payload[0]){
          case("title"):
            state.value.title = a.payload[1];
            break;
          case("subtitle"):
            state.value.subtitle = a.payload[1];
            break;
          case("xTitle"):
            state.value.xTitle = a.payload[1];
            break;
          case("yTitle"):
            state.value.yTitle = a.payload[1];
            break;
          case("dataKey"):
            state.value.data[a.payload[2]].key = a.payload[1];
            break;
          case("dataData"):
            state.value.data[a.payload[2]].data = a.payload[1];
            break;
          case("addData"):
            state.value.data.push({key:"",data:""})
            break;
          case("delData"):
            state.value.data.splice(a.payload[2],1)
            break;
          default:     
        }
    },
  },
})

export const { dataUpdate } = chartDataReducer.actions

export default chartDataReducer.reducer