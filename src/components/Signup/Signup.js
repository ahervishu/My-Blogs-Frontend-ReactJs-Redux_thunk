import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Signup.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupAction } from "../../Redux/Signup/actions/signupActions";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const signupData = useSelector((state) => state.signupData);
  // const { loading, users, error, message } = signupData;

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const signupHandler = () => {
    const signupUser = {
      fname,
      lname,
      username,
      email,
      password,
      dob,
      phonenumber,
      address,
    };
    dispatch(signupAction(signupUser, navigate));
  };

  return (
    <div className={style.mainContainer}>
      <form>
        <div className={style.container}>
          <h2>Create Account</h2>
          <TextField
            name="fname"
            value={fname}
            className={style.inputText}
            label="First Name"
            variant="standard"
            onChange={(e) => setFname(e.target.value)}
          />
          <TextField
            name="firstname"
            className={style.inputText}
            label="Last Name"
            variant="standard"
            onChange={(e) => setLname(e.target.value)}
          />
          <TextField
            name="firstname"
            className={style.inputText}
            type="email"
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            name="firstname"
            className={style.inputText}
            label="User Name"
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
          <TextField
            name="firstname"
            className={style.inputText}
            type="number"
            label="Phone Number"
            variant="standard"
            onChange={(e) => setPhonenumber(e.target.value)}
          />
          <TextField
            name="firstname"
            className={style.inputText}
            type="date"
            label="Date Of Bith"
            variant="standard"
            onChange={(e) => setDob(e.target.value)}
          />
          <TextField
            name="firstname"
            className={style.inputText}
            label="Address"
            variant="standard"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button
            className={style.submitButton}
            color="success"
            label="button"
            onClick={signupHandler}
          >
            Signup
          </Button>
          <label>
            <Link to={"/signup"}>Don't have an Account</Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Signup;
