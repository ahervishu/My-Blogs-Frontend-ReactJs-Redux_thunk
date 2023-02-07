import { Card, CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
export const CardHeader = () => {
  return (
    <div>
      <>
        <div>
          <CardMedia
            component="div"
            sx={{ width: 30, height: 30, padding: 2, borderRadius: 50 }}
            image="./../../../Images/nature01.jpeg"
            alt="Live from space album cover"
          />
        </div>
      </>
    </div>
  );
};
