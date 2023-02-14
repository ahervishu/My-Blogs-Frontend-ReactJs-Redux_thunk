import { Card } from "@mui/material";
import { CardHeader } from "./CardHeader/CardHeader";
import Cards from "./Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { blogsActions } from "../../Redux/Blogs/actions/blogsAction";
import { useEffect } from "react";
import { Interaction } from "./Interactions/Interaction";

export const Blogs = () => {
  const dispatch = useDispatch();
  const blogsData = useSelector((state) => state.allBlogs);
  useEffect(() => {
    dispatch(blogsActions());
  }, [dispatch]);
  const blogs = blogsData.blogs;

  console.log(blogsData.blogs);
  return (
    <div>
      {blogs.map((blogs) => {
        return (
          <div
            key={blogs.bid}
            style={{ padding: "1px" }}
          >
            <Card sx={{ margin: "5px", background: "rgb(229, 229, 229)", padding: 1 }}>
              <CardHeader />
              <Cards blogsData={blogs} />
              <Interaction />
            </Card>
          </div>
        );
      })}
    </div>
  );
};
