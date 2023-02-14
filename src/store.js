import { blogsReducers } from "./Redux/Blogs/reducers/blogsReducers";
import { loginReducers } from "./Redux/Login/reducers/loginReducers";
import { signupReducer } from "./Redux/Signup/reducers/signupReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");

const rootReducer = combineReducers({
  loginData: loginReducers,
  signupData: signupReducer,
  allBlogs: blogsReducers,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
