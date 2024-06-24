import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "@/store/counter";
import todoReducer from "@/store/todo";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export {useDispatch, useSelector} from "react-redux"
