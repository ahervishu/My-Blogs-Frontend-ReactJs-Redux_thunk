import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { RightPanel } from "./RightPanel/RightPanel";
import { LeftPanel } from "./LeftPanel/LeftPanel";
import styles from "./Home.module.css";
import { Grid } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Footer from "../Footer/Footer";
// import { useSelector } from "react-redux";

const Home = () => {
  const [user, setUser] = useState(null);

  const username = localStorage.getItem("user");
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    axios
      .get(`http://localhost:2023/user/user`, {
        username: username,
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!user) return null;

  const users = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div>
      {user.map((user) => {
        if (user.username === username) {
          return (
            <div key={user.uid}>
              <Navbar user={user} />
              <div style={{ margin: "auto", padding: "2px", width: "90%" }}>
                <Grid
                  container
                  spacing={{ xs: 1, md: 1 }}
                  columns={{ xs: 1, sm: 8, md: 10 }}
                  className={styles.grid}
                >
                  <Grid item xs={2} sm={4} md={7}>
                    <LeftPanel />
                  </Grid>
                  <Grid item xs={2} sm={4} md={3}>
                    <RightPanel />
                  </Grid>
                </Grid>
              </div>
              <Footer />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Home;
