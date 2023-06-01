// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";

export const useStyles = makeStyles((myTheme) => ({
  heading: { color: "#ffffff" },
  detailsText: { color: "#afaec4", fontWeight: "bold" },
  statNumber: { color: "#ffffff" },
  statText: { color: "#afaec4" },
}));
