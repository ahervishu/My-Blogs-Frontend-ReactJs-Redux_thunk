import { Button, Grid } from "@mui/material";
import styles from "./About.module.css";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";

export const About = () => {
  const [blogs, setBlogs] = React.useState();
  const params = useParams();

  const blogsData = async () => {
    return axios
      .get(`http://localhost:2023/blogs/allBlogs/${params.username}`)
      .then((res) => {
        setBlogs(res.data);
      });
  };
  const handleDelete = (bid) => {
    axios.delete(`http://localhost:2023/blogs/delete/${bid}`);
    blogsData();
  };

  React.useEffect(() => {
    blogsData();
  }, []);
  const editHandler = (id) => {
    console.log("edit", id);
  };

  console.log(blogs);
  return (
    <div className={styles.container}>
      {blogs ? (
        blogs.map((blog) => {
          {
            console.log(blog.bid);
          }
          return (
            <div className={styles.cardBlog} key={blog.bid}>
              <Grid container columns={{ xs: 1, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={6}>
                  <Box
                    className={styles.cardBox}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <CardContent className={styles.cardContent}>
                      <Typography
                        component="div"
                        variant="h3"
                        fontSize={20}
                        fontWeight="bold"
                        className={styles.header}
                      >
                        {blog.blog_header}
                      </Typography>

                      <Typography variant="h3" gutterBottom />
                      <Typography
                        variant="subtitle1"
                        component="div"
                        className={styles.blogContent}
                      >
                        {blog.content}
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={3} md={3} className={styles.blogImg}>
                  <CardMedia
                    className={styles.img}
                    component="img"
                    sx={{ width: 151, padding: 2 }}
                    image="./../../../Images/nature01.jpeg"
                    alt="Live from space album cover"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} className={styles.actions}>
                  <Button
                    variant="outlined"
                    className={styles.buttons}
                    onClick={() => editHandler(blog.bid)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    className={styles.buttons}
                    color={'error'}
                    onClick={() => handleDelete(blog.bid)}
                  >
                    DELETE
                  </Button>
                </Grid>
              </Grid>
            </div>
          );
        })
      ) : (
        <h2>Not Blogs Yet</h2>
      )}
    </div>
  );
};
