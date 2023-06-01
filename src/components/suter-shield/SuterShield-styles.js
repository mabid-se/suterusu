// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";

export const useStyles = makeStyles((theme) => ({
  subTitle: { color: "#666666", fontWeight: "medium" },
  mainTitle: { color: "#191919", fontWeight: "bold" },

  boxHeadText: { background: "rgb(198, 198, 198)", padding: "0 14px" },
  boxDetCont: {
    width: "100%",
    height: "100%",
    border: `2px solid #fefefe`,
    boxShadow: `#848584 -1px -1px 0px 1px, #848584 -1px -1px 0px 1px inset`,
  },
  boxDetText: {
    height: "110px",
    textAlign: "justify",
    color: "#333333",
  },
}));
