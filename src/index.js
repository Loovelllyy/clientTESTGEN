import React, {StrictMode} from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './App';
import {createStore} from "./Redux/store";

const store = createStore();

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);