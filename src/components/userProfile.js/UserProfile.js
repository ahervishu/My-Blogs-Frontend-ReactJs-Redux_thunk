import { Avatar } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./UsersProfile.module.css";

export const UserProfile = () => {
  const users = JSON.parse(localStorage.getItem("userdata"));
  return (
    <div>
      <Navbar user={users} />
      <div className={styles.container}>
        <div className={styles.backgroundProfile}></div>
        <div className={styles.avatar}>
          <Avatar
            alt="Vishu Aher"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 156, height: 156 }}
            className={styles.profileImage}
          />
        </div>{" "}
        <div>
          <h1>Vishwajit Aher</h1>
        </div>
      </div>
    </div>
  );
};
