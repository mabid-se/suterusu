// ---| React Imports |---
import React from "react";

// ---| MUI Imports |---
import { Box, Container, Grid, Typography } from "@mui/material";

// ---| Project Imports |---
import { useStyles } from "./OurTechnology-styles";
import Button from "../button/Button";

// ---| Asset Imports |---
import techCode from "../../assets/images/our-technology-code.png";
import techPaper from "../../assets/images/our-technology-paper.png";

const OurTechnology = () => {
  const styleClasses = useStyles();

  return (
    <Box className={styleClasses.mainContainer}>
      <Container className={styleClasses.innerContainer}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={12}
        >
          <Grid item md={6}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography variant="h5" className={styleClasses.subTitle}>
                  Our technology
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" className={styleClasses.mainTitle}>
                  Original, Pioneering Privacy Technology
                </Typography>
              </Grid>
              <Grid item>
                <p variant="subtitle1" className={styleClasses.detailsText}>
                  Designed and integrated an advanced ZK-ConSNARK scheme with
                  almost constant size proof, efficient proof generation and
                  verification.
                </p>
              </Grid>
              <Grid item>
                <p variant="subtitle1" className={styleClasses.detailsText}>
                  Our proofs are 12% to 20% shorter than the state-of-the-art
                  Bulletproof (Bootle et al., CRYPTO’18) for standard choices of
                  range size and security parameter, and are more efficient
                  (both for the prover and the verifier) by more than 10x.
                </p>
              </Grid>
              <Grid item textAlign="right" mt={2}>
                <Button btnLink="#" btnText="Check out the code library" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} textAlign="right">
            <img src={techCode} style={{ width: "100%" }} />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <p variant="subtitle1" className={styleClasses.detailsText}>
                  Orignal Core Tech Theory, “Efficient Range Proofs with
                  Transparent Setup from Bounded Integer Commitments”
                  co-authored by Suterusu CTO Dr. Lin has been accepted by the
                  top cryptography conference - EuroCrypt 2021
                </p>
              </Grid>

              <Grid item mt={2} textAlign="right">
                <Button btnLink="#" btnText="Visit EuroCrypt 2021" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} textAlign="right">
            <img src={techPaper} style={{ width: "70%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTechnology;
