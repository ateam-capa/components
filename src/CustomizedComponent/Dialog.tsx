import React from "react";
import {
  makeStyles,
  Box,
  Dialog as MaterialDialog,
  DialogContent,
  DialogActions,
  useTheme,
  useMediaQuery,
  IconButton,
  DialogProps,
} from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import { Typography } from ".";
import { colorSet } from "../Provider";
import clsx from "clsx";

export interface CustomizedDialogProps extends DialogProps {
  open: boolean;
  onClose: () => void;
  iconBoxColor?: string;
  icon?: React.ReactNode;
  title?: string;
  mainText?: string;
  subText?: string;
  buttons?: React.ReactNode;
}

const Dialog = (props: CustomizedDialogProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <MaterialDialog
      className={clsx(["capa-dialog", props.className])}
      open={props.open}
      onClose={props.onClose}
      classes={{ root: classes.root }}
    >
      <Box display="flex" alignItems="center" className="MuiDialogTitle-root">
        <Box display="flex" alignItems="center">
          <Box
            style={{ backgroundColor: props.iconBoxColor }}
            className="iconBox"
          >
            {props.icon}
          </Box>
          <Typography
            variant={matches ? "body1" : "h3"}
            color="textPrimary"
            fontWeight="700"
          >
            {props.title}
          </Typography>
        </Box>
        <IconButton className="closeButton" onClick={props.onClose}>
          <CloseOutlined />
        </IconButton>
      </Box>

      <DialogContent>
        <Typography variant={matches ? "body1" : "h4"} fontWeight="500">
          {props.mainText}
        </Typography>

        <Typography variant={"body2"} className={classes.subText}>
          {props.subText}
        </Typography>
      </DialogContent>

      <DialogActions>{props.buttons}</DialogActions>
    </MaterialDialog>
  );
};

export default Dialog;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-paper": {
      padding: 32,
      position: "relative",
      width: "calc(100% - 32px)",
      boxShadow:
        "0px 14px 56px 7px #0000001F, 0px 24px 56px 4px #00000024, 0px 24px 24px -6px #00000033",
      [theme.breakpoints.down("xs")]: {
        padding: 24,
      },
    },
    "& .MuiDialogTitle-root": {
      display: "flex",
      justifyContent: "space-between",
      padding: 0,
      "& .iconBox": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 18,
        minWidth: 42,
        minHeight: 42,
        borderRadius: 8,
        [theme.breakpoints.down("xs")]: {
          marginRight: 12,
          minWidth: 32,
          minHeight: 32,
        },
      },
      "& .closeButton": {
        position: "relative",
        top: "-15px",
        right: "-15px",
        "& svg": {
          fill: colorSet.gray900,
        },
      },
    },
    "& .MuiDialogContent-root": {
      padding: 0,
      marginTop: 36,
      [theme.breakpoints.down("xs")]: {
        marginTop: 24,
      },
    },
    "& .MuiDialogActions-root": {
      padding: 0,
      marginTop: 48,
    },
  },
  subText: {
    color: colorSet.gray700,
    marginTop: 16,
  },
}));
