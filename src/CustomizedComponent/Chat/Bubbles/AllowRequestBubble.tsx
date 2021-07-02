import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { colorSet } from "../../../Provider";
import BubbleLayout from "./BubbleLayout";
import Typography from "../../Typography";
import Button from "../../Button";

const useStyles = makeStyles((theme) => ({
  root: {},
  divider: {
    width: "100%",
    backgroundColor: colorSet.gray400,
    margin: "40px 0px",
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
  },
  req: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));

export interface AllowRequestBubbleProps {
  avatar?: string;
  permission?: boolean;
}

export default (props: AllowRequestBubbleProps) => {
  const classes = useStyles();
  return (
    <BubbleLayout isClient={false} avatar={props.avatar}>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        direction="column"
      >
        <Grid item xs={12} className={classes.req}>
          <Typography variant="body2" color="textPrimary" fontWeight="bold">
            도면 다운로드 요청
          </Typography>
          <Typography variant="caption" color="textSecondary" fontWeight="400">
            2021-07-02
          </Typography>
        </Grid>
        <Typography
          variant="body2"
          color="textPrimary"
          fontWeight="400"
          gutterBottoms={16}
        >
          안녕하세요 [Client Name]님, [Partner Name] 담당자님께서 [Project
          Name]의 도면 다운로드 권한을 요청하셨습니다
        </Typography>
        <Button
          color="primary"
          size="medium"
          variant="contained"
          disableElevation
          fullWidth
        >
          {props?.permission
            ? "도면 다운로드 허용됨"
            : "도면 다운로드 허용하기"}
        </Button>
      </Grid>
    </BubbleLayout>
  );
};
