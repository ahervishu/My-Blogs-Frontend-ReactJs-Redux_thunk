import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Signup.module.css";
import { useFormik } from "formik";
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

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      username: "",
      email: "",
      password: "",
      dob: "",
      phonenumber: "",
      address: "",
    },
    onSubmit: (values) => {
      console.log("button clicked")
      dispatch(signupAction(signupUser, navigate));
      console.log("signupUser=>", signupUser);
      console.log("values=>", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.fname) {
        errors.fname = "Required";
      }
      if (!values.lname) {
        errors.lname = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (!/(.+)@(.+){2,}\.(.+){2,}/.test(values.email)) {
        errors.email = "Enter Valid Email Id";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (
        !/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,12}$/i.test(
          values.password
        )
      ) {
        errors.password =
          "Your password needs to at least one upper and lower character, one special character and one number and length must be 6 to 12 ";
      }
      if (!values.username) {
        errors.username = "Required";
      }
      if (!values.phonenumber) {
        errors.phonenumber = "Required";
      } else if (!/^\d{10}$/.test(values.phonenumber)) {
        errors.phonenumber = "Phone number must be 10 digits";
      }
      if (!values.address) {
        errors.address = "Required";
      }
      return errors;
    },
  });
  useEffect(() => {
    setFname(formik.values.fname);
    setLname(formik.values.lname);
    setPassword(formik.values.password);
    setPhonenumber(formik.values.phonenumber);
    setEmail(formik.values.email);
    setUsername(formik.values.username);
    setDob(formik.values.dob);
    setAddress(formik.values.address);
    // setDob(formik.values.address);
    console.log("dob-->", dob);
    console.log("dob formik-->", formik.values.dob);
    console.log("dob formik-->", formik.values.username);
    console.log("dob formik-->", formik.values);
  }, [formik.values]);
  return (
    <div className={style.mainContainer}>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.container}>
          <h2>Create Account</h2>
          <TextField
            name="fname"
            // value={fname}
            className={style.inputText}
            label="First Name"
            variant="standard"
            defaultValue={formik.values.fname}
            onChange={formik.handleChange}
            // onChange={(e) => setFname(e.target.value)}
          />
          {formik.errors.fname ? <div>{formik.errors.fname}</div> : null}
          <TextField
            name="lname"
            className={style.inputText}
            label="Last Name"
            variant="standard"
            defaultValue={formik.values.lname}
            onChange={formik.handleChange}
            // onChange={(e) => setLname(e.target.value)}
          />
          {formik.errors.lname ? <div>{formik.errors.lname}</div> : null}
          <TextField
            name="email"
            className={style.inputText}
            type="email"
            label="Email"
            variant="standard"
            // onChange={(e) => setEmail(e.target.value)}

            defaultValue={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <TextField
            name="username"
            className={style.inputText}
            label="User Name"
            variant="standard"
            defaultValue={formik.values.username}
            onChange={formik.handleChange}
            // onChange={(e) => setUsername(e.target.value)}
          />
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
          <TextField
            className={style.inputText}
            type="password"
            label="Password"
            variant="standard"
            name="password"
            // onChange={(e) => setPassword(e.target.value)}

            defaultValue={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <TextField
            name="phonenumber"
            className={style.inputText}
            type="number"
            label="phone Number"
            variant="standard"
            // onChange={(e) => setPhonenumber(e.target.value)}
            defaultValue={formik.values.phonenumber}
            onChange={formik.handleChange}
          />
          {formik.errors.phonenumber ? (
            <div>{formik.errors.phonenumber}</div>
          ) : null}
          <input
            name="dob"
            className={style.inputText}
            type="date"
            variant="standard"
            min="1958-01-01"
            max="2005-12-31"
            // onChange={(e) => console.log(e.target.value)}
            defaultValue={formik.values.dob}
            onChange={formik.handleChange}
          />
          {/* {formik.errors.dob ? <div>{formik.errors.dob}</div> : null} */}

          <TextField
            name="address"
            className={style.inputText}
            label="Address"
            variant="standard"
            // onChange={(e) => setAddress(e.target.value)}
            defaultValue={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.errors.address ? <div>{formik.errors.address}</div> : null}
          <Button
            className={style.submitButton}
            color="success"
            type="submit"
            label="button"
            // onClick={signupHandler}
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
