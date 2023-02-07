import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/loginConstants";

export const loginReducers = (state = { users: [] }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true, users: [] };
    case LOGIN_SUCCESS:
      return { loading: false, users: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
