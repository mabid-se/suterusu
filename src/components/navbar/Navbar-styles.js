// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "6px 0",
  },
  logo: { width: "60%", height: "auto" },
  navItemsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    gap: 10,
  },
  indNavItem: {
    color: "#ffffff",
    fontSize: "17px",
    textDecoration: "none",
    padding: "0 10px",
    fontFamily: "Pixel-Operator",
    textTransform: "capitalize",
    fontWeight: "medium",
  },
}));
