import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";
import React from "react";
import { colorSet } from "../../../Provider";
import Typography from "../../Typography";
import clsx from "clsx";

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
export interface ConnectBubble {
  type?: "CONNECTED" | "NOT_CONNECTED";
}
export default (props: ConnectBubble) => {
  const classes = useStyles();
  return (
    <Grid container className={clsx("capa-bubble", classes.root)}>
      <Divider orientation="horizontal" className={classes.divider} />
      <CheckCircleOutline
        fontSize="small"
        style={{ fill: colorSet.primary500, marginBottom: 8 }}
      />
      <Typography variant="body2" fontWeight="700">
        [파트너 회사명]&nbsp;[파트너 매니저명]&nbsp;
        <Typography component="span" variant="body2">
          님과
        </Typography>
      </Typography>
      <Typography variant="body2" fontWeight="700">
        [고객 회사명]&nbsp;[고객 명] &nbsp;
        <Typography component="span" variant="body2">
          {props.type === "NOT_CONNECTED" ? "탸업체 확정이" : "업체확정이"}
          되었습니다.
        </Typography>
      </Typography>
      <Divider orientation="horizontal" className={classes.divider} />
    </Grid>
  );
};
