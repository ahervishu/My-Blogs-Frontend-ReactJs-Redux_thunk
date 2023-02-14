import { Card, CardMedia } from "@mui/material";
import styles from "./CardHeader.module.css";
export const CardHeader = () => {
  const user = JSON.parse(localStorage.getItem("userdata"));
  console.log(user.fname);
  return (
    <div>
      <div className={styles.userInfo}>
        <div>
          <CardMedia
            component="div"
            sx={{ width: 30, height: 30, padding: 2, borderRadius: 50 }}
            image="./../../../Images/nature01.jpeg"
            alt="Live from space album cover"
          />
        </div>
        <div className={styles.publisher}>
          <div className={styles.userName}>{user.fname + " " + user.lname}</div>
          <div className={styles.publishdBy}>{" 01-April"}</div>
        </div>
      </div>
      <hr />
    </div>
  );
};
