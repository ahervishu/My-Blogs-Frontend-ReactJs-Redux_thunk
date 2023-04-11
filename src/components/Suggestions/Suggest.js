import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Suggest.module.css";
export const Suggest = () => {
  const [category, setCategory] = useState();
  const [users, setUsers] = useState();
  const [blogs, setBlogs] = useState();

  const navigate = useNavigate();
  const fetchCategory = () => {
    return axios
      .get("http://localhost:2023/blogs/categories")
      .then((res) => setCategory(res.data));
  };
  const fetchUser = () => {
    return axios
      .get("http://localhost:2023/users/allUsers")
      .then((res) => setUsers(res.data));
  };
  const fetchBlogs = () => {
    return axios
      .get("http://localhost:2023/blogs/AllBlogs")
      .then((res) => setBlogs(res.data));
  };

  const readMore = (bid, username) => {
    // console.log(bid);
    navigate(`/blogs/${username}/${bid}`);
  };

  useEffect(() => {
    fetchUser();
    fetchCategory();
    fetchBlogs();
  }, []);
  console.log(blogs);
  return (
    <div>
      <Typography variant="h1" gutterBottom />
      <div>Recommended topics</div>
      <Typography variant="h3" gutterBottom />
      <div className={styles.conatainer}>
        {category ? (
          category.map((category, i) => {
            return <div key={i}>{category.category_name}</div>;
          })
        ) : (
          <div>
            <h1>No categories</h1>
          </div>
        )}
      </div>
      <Typography variant="h1" gutterBottom />
      <div>You can also follow this People</div>
      <Typography variant="h3" gutterBottom />
      <div className={styles.UserConatainer}>
        {users ? (
          users.map((users, i) => {
            return <div key={i}>{users.username}</div>;
          })
        ) : (
          <div>
            <h3>No Users</h3>
          </div>
        )}
      </div>
      <Typography variant="h1" gutterBottom />
      <div>Most Views</div>
      <Typography variant="h3" gutterBottom />
      <div className={styles.blogsConatainer}>
        {blogs ? (
          blogs.map((blogs, i) => {
            return (
              <div key={i}>
                <h5>{blogs.username}</h5>
                <Typography onClick={() => readMore(blogs.bid, blogs.username)}>
                  <>{blogs.blog_header}</>
                </Typography>
              </div>
            );
          })
        ) : (
          <div>
            <h3>No blogs</h3>
          </div>
        )}
      </div>
    </div>
  );
};
