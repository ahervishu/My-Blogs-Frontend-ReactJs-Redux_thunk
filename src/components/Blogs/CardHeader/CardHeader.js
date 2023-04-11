import { CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./CardHeader.module.css";
export const CardHeader = (props) => {
  // console.log("props---->", props);
  const user = JSON.parse(localStorage.getItem("userdata"));
  // console.log(user.fname);
  const date = new Date(props.headerData.date);
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
  const navigate = useNavigate();
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
          {/* /user/:username/:id */}
          <div className={styles.userName} onClick={()=>{navigate(`/user/${props.headerData.username}/${props.headerData.uid}`)}}>{props.headerData.username}</div>
          <div className={styles.publishdBy}>
            {month[date.getMonth()]}-{date.getFullYear()}
          </div>
          <div className={styles.category}>
            {props.headerData.category_name}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
