// ---| React Imports |---
import React from "react";

// ---| React Router Dom Imports |---
import { NavLink } from "react-router-dom";

// ---| MUI Imports |---
import { Container, Grid } from "@mui/material";

// ---| Project Imports |---
import { useStyles } from "./Navbar-styles";
import logo from "../../assets/images/suterusu-logo.png";

const Navbar = (props) => {
  const styleClasses = useStyles();
  const menuItems = [
    "products",
    "statistics",
    "announcements",
    "document center",
    "about us",
  ];

  return (
    <>
      <Container>
        <Grid className={styleClasses.mainContainer}>
          <Grid item md={2}>
            <NavLink to="/">
              <img
                src={logo}
                alt="suterusu-logo"
                className={styleClasses.logo}
              />
            </NavLink>
          </Grid>
          <Grid item md={8} className={styleClasses.navItemsContainer}>
            {menuItems.map((item) => (
              <NavLink
                exact
                to={item}
                key={item}
                className={styleClasses.indNavItem}
              >
                <>{item}</>
              </NavLink>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Navbar;
