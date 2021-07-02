import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import BubbleLayout from "./BubbleLayout";
import Typography from "@material-ui/core/Typography";
import { colorSet } from "../../../Provider";
const useStyles = makeStyles({
  text: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
  },
  msgInfo: {
    display: "flex",
    alignpropss: "center",
    marginBottom: 12,
    "& .created": {
      fontSize: 12,
      lineHeight: "20px",
      color: "rgba(0, 0, 0, 0.4)",
    },
    "& .name": {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: "20px",
      marginRight: 8,
    },
  },
  name: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "14px",
    marginRight: 8,
  },
  noname: {
    display: "none",
  },
  download: {
    boxShadow: "none",
    backgroundColor: colorSet.gray000,
    "& .MuiButton-label": {
      textTransform: "none",
      justifyContent: "space-between",
    },
  },
});

export interface CommonBubbleProps {
  isClient: boolean;
  avatar?: string;
}

export default (props: CommonBubbleProps) => {
  const classes = useStyles();

  return (
    <BubbleLayout isClient={props.isClient} avatar="">
      <Grid container direction="column">
        <Typography component="span" className={classes.msgInfo}>
          <Typography className="name">
            {props.isClient ? "[고객명]" : "[파트너명]"}
          </Typography>
          <Typography className="created">5분전</Typography>
        </Typography>
        <Typography component="span" className={classes.text}>
          안녕하세요.
        </Typography>
      </Grid>
    </BubbleLayout>
  );
};
