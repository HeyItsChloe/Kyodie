/**
 * Here we combine the reducers
 * Only really helpful if using multiple reducers
 */

 import { combineReducers } from 'redux';
 import businessReducer from './businessReducer.jsx';
 
 const reducers = combineReducers ({
    businessReducer: businessReducer
 });

 export default reducers; 