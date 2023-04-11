import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Setting.module.css";
import PropTypes from "prop-types";
// import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const Setting = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const deleteAccount = () => {
    console.log("account delete");
    axios.delete(`http://localhost:2023/profile/delete/${params.username}`);
    navigate("/");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <h2>Delete my account</h2>
      <Typography variant="h1" gutterBottom />
      <div>
        <p>
          If you do not think you will use this Blog Site again and would like
          your account deleted, we can take care of this for you. Keep in mind
          that you will not be able to reactivate your account or retrieve any
          of the content or information you have added.{" "}
        </p>
        <br />
        <p>
          To learn more about account deletion, please visit the Help Centre.
        </p>
        <br />
        <p>
          {" "}
          If you would still like your account deleted, click{" "}
          <span style={{ fontWeight: "bold" }}>"Delete My Account".</span>
        </p>
      </div>
      <Typography variant="h1" gutterBottom />
      <div style={{ width: "100%", margin: "auto" }}>
        <Button variant="contained" color="error" onClick={handleClickOpen}>
          Delete
        </Button>
      </div>

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            style={{ color: "red" }}
          >
            <u>Alert!</u>
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Are you sure that you want permanently DELETE your Account !
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              variant="outlined"
              onClick={() => {
                deleteAccount();
                handleClose();
              }}
              color="error"
            >
              DELETE
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </div>
  );
};
