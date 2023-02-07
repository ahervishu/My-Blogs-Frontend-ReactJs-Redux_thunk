import { SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constants/signupConstants";

export const signupReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { loading: true, users: [] };
    case SIGNUP_SUCCESS:
      return { loading: false, users: action.payload };
    case SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
