import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/loginConstants";
import axios from "axios";

export const loginActions = (payload, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.get("http://localhost:2023/user/login");
    dispatch({ type: LOGIN_SUCCESS, payload: data }, navigate("/"));
    if(payload){
      navigate("/home");
    }else{
      console.log("payload false")
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
