import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Notifications from "../Notifications/Notifications";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import style from "./Navbar.module.css";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import axios from "axios";

// console.log("users--->", users);

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [sidebar, setSidebar] = React.useState(false);

  const [notification, setNotification] = React.useState(null);

  const showSidebar = () => setSidebar(!sidebar);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const users = JSON.parse(localStorage.getItem("userdata"));

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();

  const getLogout = () => {
    localStorage.clear();
    handleMenuClose();
    navigate("/");
  };

  const getProfile = () => {
    console.log("profile");
    navigate(`/profile/${users.username}`);
  };
  const deleteNotification = (nid) => {
    console.log(nid,' delete success')
  }

  React.useEffect(() => {
    axios
      .get("http://localhost:2023/notification/notifications")
      .then((res) => setNotification(res.data));
  });

  if (!notification) return null;
  // console.log("notification -- > ", notification.length);
  const notifivationBar = (
    <div className="notification">
      <nav className={sidebar ? "nav-menu " : "nav-menu active"}>
        <ul className="nav-menu-items" >
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {notification.map((item, index) => {
            return (
              <div key={index} className={style.NotificationContainer} >
                {" "}
                <div  className={style.lists}>
                  <div className={style.link}>
                    {item.icon}
                    <span className={style.message}>{item.message}</span>
                  </div>
                  <div>
                    <DeleteTwoToneIcon onClick={()=>deleteNotification(item.nid)}/>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={getProfile}>Profile</MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      <MenuItem onClick={getLogout}>Sign out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        onClick={() => {
          navigate(`/blogs/${users.username}/${users.uid}/writeNew`);
        }}
      >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <BorderColorIcon />
        </IconButton>
        <p>Write New</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={showSidebar}
        >
          <Badge badgeContent={notification.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={getProfile}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={getLogout}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
        <p>Sign Out</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            BLOGS
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => {
                navigate(`/blogs/${users.username}/${users.uid}/writeNew`);
              }}
            >
              <BorderColorIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              // onClick={()=><Notifications />}
              onClick={showSidebar}
            >
              <Badge badgeContent={notification.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {notifivationBar}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <div>
                <div>
                  <AccountCircle />
                </div>
                <div style={{ fontSize: "10px" }}>{users.username}</div>
              </div>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "start",
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              size="large"
              color="inherit"
              sx={{ position: "absolute", left: "10px", top: "15px" }}
            >
              BLOGS
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
