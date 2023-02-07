import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import style from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginActions } from "../../Redux/Login/actions/loginActions";

export const LoginPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.loginData);
  const { users } = loginData;

  const payload = users.find(
    (user) => user.username === username && user.password === password
  );

  const loginHandler = () => {
    dispatch(loginActions(payload, navigate));
    if (payload) {
      localStorage.setItem("login", true);
      localStorage.setItem("user", username);
    } else {
      console.log("paylod empty");
    }
  };

  return (
    <div className={style.mainContainer}>
      <form>
        <div className={style.container}>
          <h2>Login</h2>
          {/* <label style={{ color: "red" }}>{invalidErrorMsg}</label> */}
          <TextField
            name="username"
            className={style.inputText}
            label="Username"
            variant="standard"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className={style.inputText}
            type="password"
            label="Password"
            variant="standard"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className={style.submitButton}
            color="success"
            label="button"
            onClick={loginHandler}
          >
            Login
          </Button>
          <label>
            <Link to={"/signup"}>Don't have an Account</Link>
          </label>
        </div>
      </form>
    </div>
  );
};
