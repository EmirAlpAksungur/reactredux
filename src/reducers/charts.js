
import { createSlice } from '@reduxjs/toolkit'

export const chartReducer = createSlice({
    name: 'charts',
    initialState: {
      value: []
    },
    reducers: {
    add: (state,a) => {
      console.log( ...state.value,
        a.payload);
      state.value = [
      ...state.value,
      a.payload
      ]
    },

  },
})

// Action creators are generated for each case reducer function
export const { add } = chartReducer.actions

export default chartReducer.reducer