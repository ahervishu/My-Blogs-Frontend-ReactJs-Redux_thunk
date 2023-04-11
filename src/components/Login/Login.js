import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginActions } from "../../Redux/Login/actions/loginActions";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        BLOGS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

function Login() {
  const errMsg = {
    display: "block",
    color: "red",
    width: "100%",
  };
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [credNotMatch, setCredNotMatch] = useState("none");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.loginData);
  const { users } = loginData;

  const payload = users.find(
    (user) => user.username === username && user.password === password
  );

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      if (payload) {
        localStorage.setItem("userdata", JSON.stringify(payload));
        localStorage.setItem("login", true);
        localStorage.setItem("user", username);
      } else {
        console.log("paylod empty");
        setCredNotMatch("block");
      }
      dispatch(loginActions(payload, navigate));
      console.log("formik data on submit==>", values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
  });
  useEffect(() => {
    setUsername(formik.values.username);
    setPassword(formik.values.password);
  }, [formik.values]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container component="main">
          <Grid item>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                noValidate
                // onSubmit={handleSubmit}
                onSubmit={formik.handleSubmit}
                sx={{
                  mt: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90%",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="email"
                  autoFocus
                  // onFocus={()=>{}}
                  // onChange={(e) => setUsername(e.target.value)}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                {formik.errors.username ? (
                  <div style={errMsg}>{formik.errors.username}</div>
                ) : null}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />

                {formik.errors.password ? (
                  <div style={errMsg}>{formik.errors.password}</div>
                ) : null}
                {
                  <div
                    style={{
                      display: credNotMatch,
                      color: "red",
                      width: "100%",
                    }}
                  >
                    Username & Password does not matched{" "}
                  </div>
                }
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    style={{ width: "100%" }}
                  />
                </div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ color: "#1976d2", cursor:'pointer' }} onClick={()=>navigate('/signup')} variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Typography>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Login;
