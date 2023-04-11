import React, { useState } from "react";
import { Box, Card, TextField } from "@mui/material";
import Cards from "./Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { blogsActions } from "../../Redux/Blogs/actions/blogsAction";
import { useEffect } from "react";
import { Interaction } from "./Interactions/Interaction";
import axios from "axios";
import { CardHeader } from "./CardHeader/CardHeader";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Search from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";

export const Blogs = () => {
  const dispatch = useDispatch();
  const blogsData = useSelector((state) => state.allBlogs);
  const [blogData, setBlogsData] = useState(blogsData.blogs);
  const [search, setSearch] = useState();

  useEffect(() => {
    dispatch(blogsActions());
  }, [dispatch]);
  useEffect(() => {
    setBlogsData(blogsData.blogs);
  }, [blogsData]);

  console.log(blogData);
  const blogs = blogsData.blogs;
  // console.log(blogsData.blogs);
  const navigate = useNavigate();
  const readMore = (bid, username) => {
    // console.log(bid);
    navigate(`/blogs/${username}/${bid}`);
  };

  const filtered = blogData
    .filter((blog) => {
      if (search === "") {
        return blog;
      } else if (
        blog.blog_header.includes(search) ||
        blog.category_name.includes(search) ||
        blog.username.includes(search)
      ) {
        return blog;
      } else if (!search) {
        return blog;
      }
    })
    .map((blogs) => {
      const { date, username, category_name, uid } = blogs;
      console.log('blogs 1234 --->',blogs)
      const headerData = { date, username, category_name, uid };
      const d = new Date(date);

      return (
        <div key={blogs.bid} style={{ padding: "1px" }}>
          <Card
            sx={{
              margin: "5px",
              background: "rgb(229, 229, 229)",
              padding: 1,
            }}
          >
            <CardHeader headerData={headerData} />
            <div onClick={() => readMore(blogs.bid, blogs.username)}>
              <Cards blogsData={blogs} />
            </div>
            <Interaction />
          </Card>
        </div>
      );
    });

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 2 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid gray",
            borderRadius: "10px",
            width: "90%",
            padding: "5px",
          }}
        >
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Search Blogs, Category, User"
            variant="standard"
            sx={{
              width: "90%",
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
      </Box>
      {filtered}
    </div>
  );
};
