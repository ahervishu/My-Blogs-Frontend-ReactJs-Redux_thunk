import {
  BLOGS_FAIL,
  BLOGS_REQUEST,
  BLOGS_SUCCESS,
} from "../constants/blogsConstants";
import axios from "axios";

export const blogsActions = (payload) => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_REQUEST });
    const { data } = await axios.get("http://localhost:2023/blogs/AllBlogs");
    dispatch({ type: BLOGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOGS_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
