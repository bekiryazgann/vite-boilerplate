import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface TodoItem {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
    date: string
}

export interface TodoState {
    todos: TodoItem[]
}

const initialState: TodoState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setDefault: (state, action: PayloadAction<TodoState>) => {
            state.todos = action.payload.todos
        },
        checkedChange: (state: TodoState, action: PayloadAction<{ index: number,  checked: boolean}>): void => {
            state.todos[action.payload.index].completed = action.payload.checked
        }
    },
})

export const {setDefault, checkedChange} = todoSlice.actions
export default todoSlice.reducer
