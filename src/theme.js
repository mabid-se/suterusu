import { createTheme } from "@mui/material";

export const myTheme = createTheme({
  typography: {
    fontFamily: ["Pixel-Operator", "MS-Sans-Serif", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightBolder: 900,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          body1: "p",
          body2: "span",
        },
      },
    },
    MuiButton: {
      defaultProps: { sx: { py: 1, px: 2 } },
    },
    MuiPaper: {
      styleOverrides: {
        root: { background: { light: "", dark: "" } },
        defaultProps: { elevation: 6 },
      },
    },
  },
});
