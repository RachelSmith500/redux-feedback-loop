import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const feelingReducer = (state =[], action) => {
    if (action.type ==='ADD_FEELINGS'){
        return[...state,action.payload]
    }
    return state;
}

const store = createStore(
    combineReducers({
        feelingReducer
    }),
    applyMiddleware(logger)
)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
