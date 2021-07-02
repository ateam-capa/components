import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { colorSet } from "../../../Provider";
import Typography from "../../Typography";
import BubbleLayout from "./BubbleLayout";

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

export interface AllowResponseBubbleProps {
  avatar?: string;
}

export default (props: AllowResponseBubbleProps) => {
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
            도면 다운로드 요청 승인
          </Typography>
          <Typography variant="caption" color="textSecondary" fontWeight="400">
            2021-07-02
          </Typography>
        </Grid>
        <Typography variant="body2" color="textPrimary" fontWeight="400">
          안녕하세요 [고객사명] [담당자명]님, [파트너사명]의
          [파트너담당자명]담당자님께서 [프로젝트명]의 도면 다운로드 권한을
          요청하셨습니다.
        </Typography>
      </Grid>
    </BubbleLayout>
  );
};
