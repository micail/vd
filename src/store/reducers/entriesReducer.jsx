import { ADD_ENTRY } from '../types/entriesTypes';

export const INITIAL_STATE = [];

const entriesReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD_ENTRY) {
    return state.concat(action.payload)
  }
  return state
};

export default entriesReducer;
