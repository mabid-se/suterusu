// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    transform: `skewY(-10deg)`,
    WebkitTransform: `skewY(-10deg)`,
    position: "relative",
  },
  innerContainer: {
    margin: "0 auto",
    transform: `skewY(10deg)`,
    WebkitTransform: `skewY(10deg)`,
  },
  subTitle: { color: "#666666", fontWeight: "medium" },
  mainTitle: { color: "#191919", fontWeight: "bold" },
  detailsText: {
    width: "90%",
    fontFamily: "Pixel-Operator",
    color: "#666666",
    fontSize: "19px",
    fontWeight: "medium",
    textAlign: "justify",
  },
}));
