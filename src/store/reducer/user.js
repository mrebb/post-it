import {ADD,UPDATE,DELETE,FETCH,FETCH_ALL} from '../actions/user-action.js';

let initialState = [];

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {

  case ADD:
    return [
      ...state, 
      payload,
    ];

  case UPDATE:{
    const updatedState = state.filter(user=>user.id !== payload.id);
    return [
      ...updatedState, 
      payload,
    ];
  }

  case DELETE:{
    const newState = state.filter(user=>user.id !== payload.id);
    return [
      ...newState,
    ];
  }

  case FETCH:{
    const fetchState = state.filter(user=>user.id === payload.id);
    return [
      ...fetchState,
    ];
  }
  case FETCH_ALL:
    return [...payload];
  
  default: return state;
  }

};