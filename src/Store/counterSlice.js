import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state,action) => { 
    
    const {first, inp2} = action.payload
      state.value = Number(first) + Number(inp2)
    },
    decrement: (state,action) => {
        const {first, inp2} = action.payload
        state.value = Number(first) - Number(inp2)
      

    },
    multiple: (state, action) => {
        const {first, inp2} = action.payload
        state.value = Number(first) * Number(inp2)
    },
    divide: (state, action) => {
        const {first, inp2} = action.payload
        state.value = Number(first) / Number(inp2)
    }
  }
})


export const { increment, decrement, multiple, divide} = counterSlice.actions

export default counterSlice.reducer