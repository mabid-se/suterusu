// ---| React Imports |---
import React from "react";

// ---| React Router Dom Imports |---
import { NavLink } from "react-router-dom";

// ---| MUI Imports |---
import { Grid } from "@mui/material";

// ---| Project Imports |---
import { useStyles } from "./Button-styles";
import BoxedContainer from "../boxed-container/BoxedContainer";

const Button = ({ btnLink, onBtnClick, btnStartIco, btnText, btnEndIco }) => {
  const styleClasses = useStyles();
  return (
    <BoxedContainer>
      <NavLink
        to={btnLink}
        className={styleClasses.btnText}
        onClick={onBtnClick}
      >
        <Grid className={styleClasses.btnContainer}>
          {btnStartIco && <>{btnStartIco}</>}
          <span className={styleClasses.btnText}>{btnText}</span>
          {btnEndIco && <>{btnEndIco}</>}
        </Grid>
      </NavLink>
    </BoxedContainer>
  );
};

export default Button;
