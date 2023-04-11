import axios from "axios";
import {
  NEWBLOG_FAIL,
  NEWBLOG_REQUEST,
  NEWBLOG_SUCCESS,
} from "../constants/newBlogConstant";

const baseUrl = "http://localhost:2023";

export const newBlogAction = (state, navigate) => async (dispatch) => {
  try {
    dispatch({ type: NEWBLOG_REQUEST });

    const { data } = await axios.post(
      `http://localhost:2023/blogs/createblog`,
      state,
      {
        method: "POST",
      }
    );
    console.log("message -- -- >", data.message);
    console.log("state -- -- >", state);

    if (data.message) {
      const notificationData = {
        nid:
          Math.random().toString(26).slice(2) +
          13 +
          Math.random().toString(26).slice(2),
        bid: state.bid,
        message: `new blog added`,
        uid: state.uid,
      };
      await axios.post(
        `http://localhost:2023/notification/notifications`,
        notificationData,
        {
          method: "POST",
        }
      );
    } else {
      console.log("wrong msg");
    }

    dispatch({ type: NEWBLOG_SUCCESS, payload: data });
    if (data.message) {
      alert("Your Blog Created succesfully");
      navigate("/home");
    }
  } catch (error) {
    dispatch({
      type: NEWBLOG_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
