import * as actions from './actions';
import axios from 'axios';

const initialState = {
  theme: 'light',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_TOKEN:
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

export const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  window.localStorage.setItem('token', token);

  return (dispatch) => {
    dispatch({
      type: actions.SET_TOKEN,
      payload: token,
    });
  };
};

export default userReducer;
