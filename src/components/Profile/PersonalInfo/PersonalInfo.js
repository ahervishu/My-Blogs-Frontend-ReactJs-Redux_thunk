import { Button, Grid, TextField, Typography } from "@mui/material";
import { margin } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PersonalInfo.module.css";

export const PersonalInfo = (props) => {
  const [isNameFocused, setIsNamedFocused] = useState(false);
  // const [editable, setEditable] = useState(true);
  const [edit, setEdit] = useState(true);

  // const [userName, setUserName] = useState(props.userData[0].username);
  const [fname, setFname] = useState(props.userData[0].fname);
  const [lname, setLName] = useState(props.userData[0].lname);
  const [email, setEmail] = useState(props.userData[0].email);
  const [password, setPassword] = useState(props.userData[0].password);
  const [address, setAddress] = useState(props.userData[0].address);
  const [phonenumber, setPhoneNumber] = useState(props.userData[0].phonenumber);
  // const [dob, setDob] = useState(props.userData[0].dob);

  const params = useParams();
  const editHandler = () => {
    setEdit(false);
  };
  console.log(params);
  const saveHandler = async () => {
    const data = { fname, lname, email, password, address, phonenumber };
    await axios.put(
      `http://localhost:2023/profile/personal-info/${params.username}`,
      data,
      { method: "*" }
    );
    setEdit(true);
  };
  return (
    <div className={styles.container}>
      {props.userData.map((user) => {
        const date = new Date(user.dob);
        const month = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
        return (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            key={user.uid}
          >
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={styles.input}
                InputLabelProps={{
                  style: {
                    color: "blue",
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                }}
                label="Username"
                defaultValue={user.username}
                disabled
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={styles.input}
                defaultValue={user.fname}
                // variant="standard"
                label="First Name"
                disabled
                // disabled
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={styles.input}
                type={"text"}
                defaultValue={user.lname}
                // variant="standard"
                label="Last Name"
                disabled
                onChange={(e) => {
                  setLName(e.target.value);
                }}
                // disabled
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={styles.input}
                defaultValue={user.email}
                // variant="standard"

                disabled={edit}
                // disabled
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={styles.input}
                type="password"
                defaultValue={user.password}
                // disabled
                disabled={edit}
                // variant="standard"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={styles.input}
                defaultValue={user.address}
                // variant="standard"
                // disabled
                disabled={edit}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={styles.input}
                defaultValue={user.phonenumber}
                disabled={edit}
                // disabled
                // variant="standard"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={styles.input}
                defaultValue={`${date.getDay()} - ${month[date.getMonth()]} , ${date.getFullYear()}`}
                // variant="standard"
                disabled
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                variant="contained"
                style={{
                  padding: "15px",
                  background: "orange",
                  width: "100px",
                  margin: "2px",
                }}
                onClick={saveHandler}
                disabled={edit}
              >
                Save
              </Button>
              <Button
                variant="contained"
                style={{
                  padding: "15px",
                  background: "blue",
                  width: "100px",
                  margin: "2px",
                }}
                onClick={editHandler}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default PersonalInfo;
