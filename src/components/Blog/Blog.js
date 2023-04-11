import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import styles from "./Blog.module.css";
import axios from "axios";
import { Avatar, Typography } from "@mui/material";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import NearMeIcon from "@mui/icons-material/NearMe";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Suggest } from "../Suggestions/Suggest";
import Navbar from "../Navbar/Navbar";
// import { Suggest } from "./Suggest";

export const Blog = () => {
  const params = useParams();
  const bid = params.id;
  const [post, setPost] = useState();

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
  const fetchBlogs = () => {
    return axios
      .get(`http://localhost:2023/blogs/singleblogs/${bid}`)
      .then((response) => {
        setPost(response.data);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  if (!post) return null;
  const users = JSON.parse(localStorage.getItem("userdata"));

  console.log("single post--->", post);
  return (
    <div>
      {/* <Navbar user={users}/> */}
      {post.map((post) => {
        const date = new Date(post.date);
        return (
          <div className={styles.container} key={post.bid}>
            <div
              xs="auto"
              style={{
                background: "rgba(219, 219, 219, 0.778)",
                padding: "15px",
              }}
            >
              <div className={styles.headContainer}>
                <div className={styles.userDetails}>
                  <div>
                    <Avatar
                      alt={post.username}
                      src="/static/images/avatar/3.jpg"
                    />
                  </div>
                  <div className={styles.userName}>{post.username}</div>
                  <div>
                    {month[date.getMonth()]}-{date.getFullYear()}
                  </div>
                  <div>{post.category_name}</div>
                </div>
                <div className={styles.social}>
                  <div className={styles.socialIcon}>
                    <PersonAddAltIcon />
                  </div>
                  <div className={styles.socialIcon}>
                    <ShareIcon />
                  </div>
                  <div className={styles.socialIcon}>
                    <MoreVertIcon />
                  </div>
                </div>
              </div>
              <hr />
              <Typography variant="h2" gutterBottom />
              <div>
                <Typography variant="h4">{post.blog_header}</Typography>
              </div>
              <Typography variant="h2" gutterBottom />
              <div>
                <Box
                  component="img"
                  className="center"
                  style={{
                    margin: "auto",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    borderRadius: "5px",
                  }}
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 235, md: 167 },
                    maxWidth: { xs: 330, md: 250 },
                  }}
                  alt="The house from the offer."
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
              </div>
              <Typography variant="h1" gutterBottom />
              <div style={{ width: "95%" }}>
                <p style={{ maxWidth: "1200px" }}>{post.content}</p>
              </div>
              <Typography variant="h2" gutterBottom />
              <hr style={{ width: "100%" }} />
              <div className={styles.interactions}>
                <div>
                  <FavoriteBorderIcon className={styles.icons} />
                </div>
                <div>
                  <CommentTwoToneIcon className={styles.icons} />
                </div>
                <div>
                  <NearMeIcon className={styles.icons} />
                </div>
                <div>
                  <TurnedInNotIcon className={styles.icons} />
                </div>
              </div>
            </div>
            <div
              style={{
                maxWidth: "600px",
                minWidth: "350px",
                textAlign: "center",
                padding: "5px",
              }}
            >
              <div>
                {/* <Typography>You can also read this</Typography> */}
                <Suggest />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
