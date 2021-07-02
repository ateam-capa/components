import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { colorSet } from "../../../Provider";

const useStyles = makeStyles((theme) => {
  return {
    bubbleSender: {
      backgroundColor: colorSet.primary200,
      borderRadius: 8,
      padding: "12px 16px",
      width: 280,
      border: "none",
      marginBottom: 12,
    },
    bubbleReceiver: {
      backgroundColor: colorSet.gray000,
      borderRadius: 8,
      padding: "12px 16px",
      width: 280,
      border: "1px solid #c9d1d6",
      "&:not(:first-child)": {
        marginBottom: 12,
      },
    },
    sender: {
      width: "100%",
      display: "flex",
      marginLeft: "auto",
      flexDirection: "row-reverse",
      padding: "0px 20px",
      "&>img": {
        width: 28,
        height: 28,
        borderRadius: 4,
        marginRight: 8,
      },
    },
    receiver: {
      width: "100%",
      display: "flex",
      padding: "0px 20px",
      "&>img": {
        width: 28,
        height: 28,
        borderRadius: 4,
        marginRight: 8,
      },
    },
    avatar: {
      marginRight: 12,
      width: 28,
      height: 28,
      borderRadius: 4,
      cursor: "pointer",
    },
  };
});

interface MessageBubbleProps {
  isClient: boolean;
  avatar?: string;
}

const BubbleLayout: React.FC<MessageBubbleProps> = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={props.isClient ? classes.sender : classes.receiver}
      wrap="nowrap"
    >
      {props.isClient ? null : (
        <Avatar
          variant="square"
          src={props.avatar}
          className={classes.avatar}
        />
      )}
      <Grid
        container
        className={
          props.isClient ? classes.bubbleSender : classes.bubbleReceiver
        }
      >
        {props.children}
      </Grid>
    </Grid>
  );
};

export default BubbleLayout;
