// Action for Login
export const LOGIN='LOGIN';
// Action for Logout
export const LOGOUT='LOGOUT';

//Action creator for Login
export const login = (user) => ({
  type: LOGIN,
  payload: {isLoggedIn: true, username:user},
});

//Action creator for Logout
export const logout = () => ({
  type: LOGOUT,
  payload: {isLoggedIn: false,username:null},
});


