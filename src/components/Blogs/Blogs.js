import { Card } from "@mui/material";
import { CardHeader } from "./CardHeader/CardHeader";
import Cards from "./Cards/Cards";

export const Blogs = () => {
  return (
    <div>
      <Card sx={{margin: '5px'}}>
        <CardHeader />
        <Cards />
      </Card>
    </div>
  );
};
