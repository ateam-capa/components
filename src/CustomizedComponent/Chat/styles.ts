import makeStyles from "@material-ui/core/styles/makeStyles";
import { colorSet } from "../../Provider";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: "fixed",
      flexDirection: "column",
      zIndex: 1001,
      maxWidth: 408,
      height: "calc(100% - 61px)",
      backgroundColor: colorSet.gray100,
      [theme.breakpoints.down("xs")]: {},
    },
  };
});

export default useStyles;
