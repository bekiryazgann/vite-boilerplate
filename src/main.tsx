import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import {BrowserRouter} from "react-router-dom";
import Router from "@/router";
import { store } from '@/store'
import { Provider } from 'react-redux'
import ErrorBoundary from "@/component/error-boundary";
import "@/fake-api/api"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>,
)
