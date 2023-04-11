import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import styles from "./Cards.module.css";
import { Grid } from "@mui/material";
import { LeftPanel } from "../../Dashboard/LeftPanel/LeftPanel";
import { CardHeader } from "../CardHeader/CardHeader";
import { Blog } from "../../Blog/Blog";

export default function Cards(props) {
  const theme = useTheme();
  const blogs = props.blogsData;
  // console.log("props 2nd ----->", props);
  const navigate = useNavigate();
 
  return (
    <div className={styles.cardBlog}>
      {/* <CardHeader  /> */}
      <Grid container columns={{ xs: 1, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={9}>
          <Box
            className={styles.cardBox}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <CardContent className={styles.cardContent}>
              <Typography
                component="div"
                variant="h2"
                fontSize={22}
                fontWeight="bold"
              >
                {blogs.blog_header}
              </Typography>
              <Typography variant="h3" gutterBottom />
              <Typography
                variant="subtitle1"
                component="div"
                className={styles.blogContent}
              >
                {blogs.content}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={3} className={styles.blogImg}>
          <CardMedia
            className={styles.img}
            component="img"
            sx={{ width: 151, padding: 2 }}
            image="./../../../Images/nature01.jpeg"
            alt="Live from space album cover"
          />
        </Grid>
      </Grid>
    </div>
  );
}
