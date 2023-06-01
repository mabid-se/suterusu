// ---| React Imports |---
import React from "react";

// ---| Project Imports |---
import { useStyles } from "./BoxedContainer-styles";
import { Grid } from "@mui/material";

const BoxedContainer = (props) => {
  const styleClasses = useStyles();
  return <Grid className={styleClasses.mainContainer}>{props.children}</Grid>;
};

export default BoxedContainer;
