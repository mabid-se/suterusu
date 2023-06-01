import React from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { myTheme } from "./theme";
import RoutesProvider from "./routes/RoutesProvider";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={responsiveFontSizes(createTheme(myTheme))}>
      <RoutesProvider />
    </ThemeProvider>
  );
};

export default App;
