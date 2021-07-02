import React from "react";
import Grid from "@material-ui/core/Grid";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";
import { colorSet } from "../../../Provider";
import Typography from "../../Typography";
import clsx from "clsx";
export interface CompleteRequestBubble {}
const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: colorSet.gray000,
    width: 408,
  },
  divider: {
    width: "100%",
    backgroundColor: colorSet.gray400,
    margin: "40px 0px",
  },
}));
export default (props: CompleteRequestBubble) => {
  const classes = useStyles();
  return (
    <Grid container className={clsx("capa-bubble", classes.root)}>
      <Divider orientation="horizontal" className={classes.divider} />
      <CheckCircleOutline
        fontSize="small"
        style={{ fill: colorSet.primary500, marginBottom: 8 }}
      />
      <Typography variant="body2" fontWeight="700">
        [프로젝트명]이&nbsp;
      </Typography>
      <Typography variant="body2" fontWeight="400">
        거래완료 처리되었습니다.
      </Typography>
      <Divider orientation="horizontal" className={classes.divider} />
    </Grid>
  );
};
