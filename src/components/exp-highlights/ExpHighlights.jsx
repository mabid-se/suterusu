// ---| Project Imports |---
import React from "react";

// ---| MUI Imports |---
import { Box, Container, Grid, Typography } from "@mui/material";

// ---| Project Imports |---
import { useStyles } from "./ExpHighlights-styles";
import Button from "../button/Button";
import BoxedContainer from "../boxed-container/BoxedContainer";

// ---| Asset Imports |---
import iconImg1 from "../../assets/icons/arbitrary-amount.png";
import iconImg2 from "../../assets/icons/protect-addresses.png";
import iconImg3 from "../../assets/icons/lock-ups.png";
import iconImg4 from "../../assets/icons/confidentiality.png";
import iconImg5 from "../../assets/icons/faster.png";

const ExpHighlights = () => {
  const styleClasses = useStyles();
  const highlights = [
    {
      imgSrc: iconImg1,
      imgAlt: "arbitrary-amount",
      text: "Arbitrary amount depsoit/withdraw and transfer via Metamask",
    },
    {
      imgSrc: iconImg2,
      imgAlt: "protect-addresses",
      text: "Withdraw to any layer-1 addresses to protect sender’s addresses",
    },
    {
      imgSrc: iconImg3,
      imgAlt: "lock-ups",
      text: "No lock-ups of your funds on layer-2 Suter Shield",
    },
    {
      imgSrc: iconImg4,
      imgAlt: "confidentiality",
      text: "Transfer within layer-2 addresses, full anonymity and confidentiality provided",
    },
    {
      imgSrc: iconImg5,
      imgAlt: "faster",
      text: "Faster than deposit/withdraw from CEX and much better privacy protection.",
    },
  ];
  return (
    <Box className={styleClasses.mainContainer}>
      <Container className={styleClasses.innerContainer}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <Grid item md={6}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography variant="h3" className={styleClasses.mainHeading}>
                  User Experience Highlights
                </Typography>
              </Grid>
              <Grid item mt={3}>
                <Button btnLink="#" btnText="Launch App on BSC" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              {highlights.map((item) => (
                <Grid item md={6} key={item.imgAlt}>
                  <BoxedContainer>
                    <Grid className={styleClasses.inBoxedCont}>
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className={styleClasses.boxedContImg}
                      />
                      <Typography>{item.text}</Typography>
                    </Grid>
                  </BoxedContainer>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid className={styleClasses.bottomLeftImgCont} />
    </Box>
  );
};

export default ExpHighlights;
