// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";
import ilusImg from "../../assets/images/back_illustration.png";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // background: "#14141b",
    background: "#0c4a6e",
    height: "605px",
    transform: `skewY(-10deg)`,
    WebkitTransform: `skewY(-10deg)`,
    position: "relative",
    overflow: "hidden",
  },
  innerContainer: {
    margin: "0 auto",
    transform: `skewY(10deg)`,
    WebkitTransform: `skewY(10deg)`,
    position: "relative",
    zIndex: 99,
  },
  mainHeading: { fontWeight: "bold", color: "#ffffff" },
  inBoxedCont: { padding: theme.spacing(2), height: "145px" },
  boxedContImg: { width: "15%", backgroundColor: "#060084" },
  bottomLeftImgCont: {
    width: "576px",
    height: "310px",
    backgroundImage: `url(${ilusImg})`,
    backgroundSize: "contain",
    position: "absolute",
    zIndex: 0,
    left: 0,
    top: "220px",
    WebkitTransform: `skewY(10deg)`,
    transform: `skewY(10deg)`,
  },
}));
