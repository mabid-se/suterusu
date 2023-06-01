// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";

export const useStyles = makeStyles((myTheme) => ({
  mainContainer: {
    background: "#c6c6c6",
    borderWidth: "2px",
    borderColor: "#dfdfdf #0a0a0a #0a0a0a #dfdfdf",
    borderStyle: "solid",
    boxShadow: `#00000059 4px 4px 10px 0px, #fefefe 1px 1px 0px 1px inset, #848484 -1px -1px 0px 1px inset`,
    boxSizing: "border-box",
  },
}));
