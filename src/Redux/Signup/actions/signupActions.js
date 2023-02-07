import axios from "axios";
import {
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/signupConstants";

const baseUrl = "http://localhost:2023";

export const signupAction = (signupUser, navigate) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });

    const { data } = await axios.post(`${baseUrl}/user/signup`, signupUser, {
      method: "POST",
    });

    dispatch({ type: SIGNUP_SUCCESS, payload: data });
    navigate('/');
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
