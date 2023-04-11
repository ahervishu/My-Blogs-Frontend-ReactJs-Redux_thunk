import Search from "@mui/icons-material/Search";
import { Blogs } from "../../Blogs/Blogs";
import { Carousel } from "../../Carousel/Carousel";

export const LeftPanel = () => {
  
  return (
    <div style={{ borderRight: "1px solid gray" }}>
      {/* <Carousel /> */}
      <Blogs />
    </div>
  );
};
