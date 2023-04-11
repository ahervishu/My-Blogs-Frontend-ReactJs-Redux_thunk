import { NEWBLOG_FAIL, NEWBLOG_REQUEST, NEWBLOG_SUCCESS } from "../constants/newBlogConstant";

export const newBlogReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case NEWBLOG_REQUEST:
      return { loading: true, users: [] };
    case NEWBLOG_SUCCESS:
      return { loading: false, users: action.payload };
    case NEWBLOG_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
