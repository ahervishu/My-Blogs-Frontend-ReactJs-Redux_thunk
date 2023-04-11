import { blogsReducers } from "./Redux/Blogs/reducers/blogsReducers";
import { loginReducers } from "./Redux/Login/reducers/loginReducers";
import { newBlogReducer } from "./Redux/newBlog/reducers/newBlogReducer";
import { signupReducer } from "./Redux/Signup/reducers/signupReducer";
import { legacy_createStore as createStore} from 'redux'
// import {combineReducers, applyMiddleware} from 'redux';

const { combineReducers, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");

const rootReducer = combineReducers({
  loginData: loginReducers,
  signupData: signupReducer,
  allBlogs: blogsReducers,
  newBlog: newBlogReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
