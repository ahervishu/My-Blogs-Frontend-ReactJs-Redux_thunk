import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./Cards.module.css";
import { Grid } from "@mui/material";
import { LeftPanel } from "../../Dashboard/LeftPanel/LeftPanel";

export default function Cards() {
  const theme = useTheme();

  return (
    <div style={{backgroundColor: 'red'}}>
      <Grid
        container
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={8}>
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
                3 ChatGPT Extensions to Automate Your Life
              </Typography>
              <Typography variant="h3" gutterBottom />
              <Typography variant="subtitle1" component="div">
                ChatGPT on WhatsApp, Gmail, Google Sheets, your code editor, and
                more! — Unless you’ve been living under a rock, you probably
                know how ChatGPT is changing businesses and the way we work
                and...
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <CardMedia
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
