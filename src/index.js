import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './index.css';
import {App} from './App';
import {setupStore} from "./redux";
import {ThemeContextWrapper} from "./Theme/themeContextWrapper";


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();

root.render(
    <BrowserRouter>
        <ThemeContextWrapper>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeContextWrapper>
    </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

