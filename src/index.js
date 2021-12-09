import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk, logger))

import App from './App';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
