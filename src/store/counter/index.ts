import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        setDefault: (state, action: PayloadAction<string>) => {
            state.value = Number(action.payload)
        },
    },
})

export const { increment, decrement, setDefault } = counterSlice.actions
export default counterSlice.reducer
