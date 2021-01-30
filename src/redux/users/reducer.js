import * as actions from './actions';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_USERS:
      return { ...state, users: action.payload };
    case actions.GET_USER:
      return { ...state, users: [...state.users, action.payload] };
    case actions.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    case actions.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.id ? action.payload : u
        ),
      };

    default:
      return state;
  }
};

export const getUsers = (users) => {
  return (dispatch) => {
    dispatch({
      type: actions.GET_USERS,
      payload: users,
    });
  };
};

export const getUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: actions.GET_USER,
      payload: user,
    });
  };
};

export const deleteUser = (userId) => {
  return (dispatch) => {
    dispatch({
      type: actions.DELETE_USER,
      payload: userId,
    });
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: actions.UPDATE_USER,
      payload: user,
    });
  };
};

export default usersReducer;
