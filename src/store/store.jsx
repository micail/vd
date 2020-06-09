/**
* @namespace store
*/

import { createStore, combineReducers } from 'redux';

import entries from './reducers/entriesReducer';

/**
 * Creates a new Redux store
 * @memberof store
 * @param routerMiddleware - router middleware
 * @param moreReducers {Object} - extra reducers to add for extending purposes only
 * @param moreMiddleware {Array<function>} - extra middleware to add for extending purposes only
 * @returns {Store<any>}
 */
const makeStore = () => createStore(combineReducers(
  {
    entries
  },
),);

export default makeStore;
