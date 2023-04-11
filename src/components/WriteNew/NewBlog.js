import * as React from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import { newBlogAction } from "../../Redux/newBlog/actions/newBlogAction";
import { useDispatch } from "react-redux";

export const NewBlog = () => {
  const params = useParams();
  const [state, setState] = React.useState({
    bid:
      Math.random().toString(26).slice(2) +
      13 +
      Math.random().toString(26).slice(2),
    blog_header: "",
    content: "",
    image: "",
    category: "",
    category_id: "",
    uid: params.userId,
  });
  const [category, setCategory] = React.useState("");

  const [post, setPost] = React.useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get("http://localhost:2023/blogs/categories").then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log("post", post);
  if (!post) return "No post!";
  const handleChange = (event) => {
    setCategory(event.target.value);
    setState((state) => {
      return { ...state, category_id: event.target.value };
    });
  };

  const submitHandler = () => {
    dispatch(newBlogAction(state, navigate));
    console.log("state---> ", state);
  };
  const backHandler = () => {
    navigate("/home");
  };

  return (
    <div style={{ padding: "20px" }}>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Write Your Thoughts Here..
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="blogHeader"
              name="blogHeader"
              variant="filled"
              label="Blog Header"
              fullWidth
              autoComplete="given-name"
              onChange={(event) =>
                setState((state) => {
                  return { ...state, blog_header: event.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="addImage"
              name="addImage"
              fullWidth
              variant="filled"
              type={"file"}
              onChange={(event) =>
                setState((state) => {
                  return { ...state, image: event.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              required
              id="date"
              name="date"
              label="date"
              value={
                new Date().getDate() +
                " / " +
                new Date().getMonth() +
                " / " +
                new Date().getFullYear()
              }
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={"auto"}>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Choose Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={category}
                onChange={handleChange}
                autoWidth
                label="Choose Category"
              >
                <MenuItem value="">
                  <em>Choose Category</em>
                </MenuItem>
                {post.map((category) => {
                  return (
                    <MenuItem
                      key={category.category_id}
                      value={category.category_id}
                    >
                      {category.category_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="paragraph_text"
              multiline
              maxRows={4}
              label="Content"
              variant="filled"
              onChange={(event) =>
                setState((state) => {
                  return { ...state, content: event.target.value };
                })
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <FormControlLabel
              onClick={submitHandler}
              control={
                <Button variant="contained" color="success">
                  Post
                </Button>
              }
            />
            <FormControlLabel
              onClick={backHandler}
              control={<Button variant="outlined">Back</Button>}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
};
