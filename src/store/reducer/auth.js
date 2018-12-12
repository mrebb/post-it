
import {LOGIN, LOGOUT} from '../actions/auth-action.js';

const initialState = JSON.parse(window.localStorage.getItem('token')) || {isLoggedIn: false,username:null} ;

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
  case LOGIN: {
    const token = {isLoggedIn: true, username:payload.username};
    window.localStorage.setItem(
      'token',
      JSON.stringify(token)
    );
    return {...state, ...payload};
    
  }
  case LOGOUT:{
    const token = {isLoggedIn: false, username:payload.username};
    window.localStorage.setItem(
      'token',
      JSON.stringify(token)
    );
    return {...state, ...payload};
    
  }
  default: return state;
  }
};