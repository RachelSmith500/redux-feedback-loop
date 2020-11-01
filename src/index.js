import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const howWeDoingReducer = (state = {}, action) => {
    if (action.type ==='ADD_FEELINGS'){
        return{
            ...state, 
            feeling: Number(action.payload),
        }
    }
    if (action.type === 'ADD_UNDERSTANDING'){
        return {
            ...state, 
            understanding: Number(action.payload),
        }
    } 
    if (action.type ==='ADD_SUPPORT'){
        return{
            ...state, 
            support: Number(action.payload),
        }
    }
    if (action.type ==='ADD_COMMENTS'){
        return{
            ...state, 
            comments: action.payload,
        }
    } if (action.type === 'ADD_THANKYOU'){
        return state = {}

    }   return state;
   
}


const store = createStore(
    combineReducers({
        howWeDoingReducer
    }),
    applyMiddleware(logger)
)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
