import {
  BLOGS_FAIL,
  BLOGS_REQUEST,
  BLOGS_SUCCESS,
} from "../constants/blogsConstants";

export const blogsReducers = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case BLOGS_REQUEST:
      return { loading: true, blogs: [] };
    case BLOGS_SUCCESS:
      return { loading: false, blogs: action.payload };
    case BLOGS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
