import styles from "./Profile.module.css";
import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.dark,
  },
  toolbar: {
    minHeight: 20,
  },
  menuButton: {
    display: "none",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      display: "inline-flex",
    },
  },
  linkBrand: {
    lineHeight: 1,
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerRoot: {
    width: 300,
    flexShrink: 0,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  drawerContainer: {
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 250,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ProfileNavbar(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  const content = {
    brand: { image: "nereus-assets/img/nereus-dark.png", width: 110 },
    "brand-mobile": { image: "nereus-assets/img/nereus-light.png", width: 110 },
    link1: "Personal Information",
    link2: "All Blogs",
    link3: "Setting",
    link4: "Section Four",
    ...props.content,
  };

  let brand = content["brand"].text || "";
  let brandMobile = content["brand-mobile"].text || "";

  if (content["brand"].image) {
    brand = (
      <img src={content["brand"].image} alt="" width={content["brand"].width} />
    );
  }

  if (content["brand-mobile"].image) {
    brandMobile = (
      <img
        src={content["brand-mobile"].image}
        alt=""
        width={content["brand-mobile"].width}
      />
    );
  }

  const buckets = {
    main: Array.isArray(props.bucketMain) ? props.bucketMain : [],
  };

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <div className={classes.root}>
      {
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar
            className={classes.toolbar}
            style={{ paddingLeft: "380px", justifyContent: "end" }}
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
              style={{ color: "black" }}
              onClick={toggleDrawer(true)}
            >
              <MenuRoundedIcon />
              <Typography style={{ color: "black" }}> User Profile</Typography>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="menu"
              style={{
                color: "black",
                margin: "25px",
                height: "25px",
              }}
              onClick={() => navigate("/home")}
            >
              <div style={{ width: "45px", height: "45px",borderRadius:"50px", background: "purple", display:'flex',justifyContent:'center', alignItems:"center" }}>
                <HomeTwoToneIcon style={{fontSize:'30px'}}/>
              </div>
              <Typography />
            </IconButton>

            <Button color="secondary" disabled={false} variant="filledTonal" />
          </Toolbar>
        </AppBar>
      }
      <Drawer className={classes.drawerRoot} variant="permanent">
        <Toolbar className={classes.toolbar} />
        <div className={classes.drawerContainer}>
          <div>
            <div className={styles.profile} style={{ paddingTop: "80px" }}>
              {" "}
              <div className={styles.backgroundImg}>
                <div className={styles.avtar}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 116, height: 116 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <Typography variant="h1" gutterBottom />
          <List>
            <ListItem
              button
              key={content["link1"]}
              onClick={() => {
                props.setInfo(true);
                props.setAbout(false);
                props.setSetting(false);
              }}
            >
              <ListItemIcon className={classes.iconWrapper}>
                <PermIdentitySharpIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content["link1"]} />
            </ListItem>
            <ListItem
              button
              key={content["link2"]}
              onClick={() => {
                props.setInfo(false);
                props.setAbout(true);
                props.setSetting(false);
              }}
            >
              <ListItemIcon className={classes.iconWrapper}>
                <LibraryBooksOutlinedIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content["link2"]} />
            </ListItem>
            <ListItem
              button
              key={content["link3"]}
              onClick={() => {
                props.setInfo(false);
                props.setAbout(false);
                props.setSetting(true);
              }}
            >
              <ListItemIcon className={classes.iconWrapper}>
                <SettingsOutlinedIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content["link3"]} />
            </ListItem>
            <ListItem button key={content["link4"]}>
              <ListItemIcon className={classes.iconWrapper}>
                {/* <NotificationImportantIcon className={classes.icon} /> */}
              </ListItemIcon>
              <ListItemText primary={content["link4"]} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Drawer
        anchor="top"
        open={state.open}
        onClose={toggleDrawer(false)}
        style={{ height: "10px !importatnt" }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(false)}
          >
            <MenuRoundedIcon />
            <Typography> User Profile</Typography>
          </IconButton>
          <Link
            href="#"
            color="inherit"
            underline="none"
            variant="h5"
            className={classes.linkBrand}
          >
            {brand}
          </Link>
        </Toolbar>
        <div className={classes.drawerContainer}>
          <Box
            mb={0}
            ml={0}
            pb={0}
            border={1}
            borderTop={0}
            borderLeft={0}
            borderRight={0}
            borderColor="background.emphasis"
          >
            <Link
              href="#"
              color="primary"
              underline="none"
              variant="h5"
              className={classes.linkBrand}
            >
              {brandMobile}
            </Link>
          </Box>
          <List>
            <div onClick={toggleDrawer(false)}>
              <ListItem
                button
                key={content["link1"]}
                onClick={() => {
                  props.setInfo(true);
                  props.setAbout(false);
                  props.setSetting(false);
                }}
              >
                <ListItemIcon className={classes.iconWrapper}>
                  {/* <MenuRoundedIcon className={classes.icon} /> */}
                </ListItemIcon>
                <ListItemText primary={content["link1"]} />
              </ListItem>
            </div>
            <div onClick={toggleDrawer(false)}>
              <ListItem
                button
                key={content["link2"]}
                onClick={() => {
                  props.setInfo(false);
                  props.setAbout(true);
                  props.setSetting(false);
                  toggleDrawer(false);
                }}
              >
                <ListItemIcon className={classes.iconWrapper}>
                  {/* <FilterHdrIcon className={classes.icon} /> */}
                </ListItemIcon>
                <ListItemText primary={content["link2"]} />
              </ListItem>
            </div>
            <div onClick={toggleDrawer(false)}>
              <ListItem
                button
                key={content["link3"]}
                onClick={() => {
                  props.setInfo(false);
                  props.setAbout(false);
                  props.setSetting(true);
                  toggleDrawer(false);
                }}
              >
                <ListItemIcon className={classes.iconWrapper}>
                  {/* <DirectionsBusIcon className={classes.icon} /> */}
                </ListItemIcon>
                <ListItemText primary={content["link3"]} />
              </ListItem>
            </div>
            <div onClick={toggleDrawer(false)}>
              <ListItem
                button
                key={content["link4"]}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon className={classes.iconWrapper}>
                  {/* <NotificationImportantIcon className={classes.icon} /> */}
                </ListItemIcon>
                <ListItemText primary={content["link4"]} />
              </ListItem>
            </div>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        <div>
          {buckets["main"].map((component) => (
            <React.Fragment>{component}</React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}
