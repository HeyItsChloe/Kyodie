/** STORE:
 * - It stores the whole state of the app in an immutable object tree. 
 * - To create a new store - createStore(reducer, [initialState], [enhancer]). (this function returns a store object.)
 * - It takes three arguments: 
 *      - reducer - A reducing function. 
 *      - initialState - The initial state of the store.
 *      - enhancer - Can be used to enhance the Redux store and add third-party libraries and middleware for logging (logger), persistant storage, etc.
 *          - NOTE: Middleware adds extra functionality to the Redux dispatch function; enhancers add extra functionality to the Redux store.
 * https://medium.com/the-web-tub/managing-your-react-state-with-redux-affab72de4b1
 * 
 * - composeWithDevTools() because using redux-devtools-extension is helpful
 * https://medium.com/@zalmoxis/improve-your-development-workflow-with-redux-devtools-extension-f0379227ff83
 */

 import { createStore } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import reducers from './Reducers/index.js';

 const store = createStore(reducers, composeWithDevTools());

 export default store; 