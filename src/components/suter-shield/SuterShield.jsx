// ---| React Imports |---
import React from "react";

// ---| MUI Imports |---
import { Box, Container, Grid, Typography } from "@mui/material";

// ---| Project Imports |---
import sideImg from "../../assets/images/second_page.png";
import BoxedContainer from "../boxed-container/BoxedContainer";
import { useStyles } from "./SuterShield-styles";

const SuterShield = () => {
  const styleClasses = useStyles();
  const gridInfo = [
    {
      heading: "Addresses Protection",
      detail: "Delink Sender and Receiver address going in and out of layer-1",
    },
    {
      heading: "Transaction Privacy Protection",
      detail:
        "Complete privacy protection for both user identities and transaction details within layer-2",
    },
    {
      heading: "Smart Contracts Protection",
      detail:
        "Layer-1 or layer-2 miners will only see encrypted data for all the transactions.",
    },
  ];
  return (
    <Box
      sx={{ py: { xs: 4, md: 8, lg: 12 }, position: "relative", zIndex: 99 }}
    >
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid
            item
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              p: 2,
            }}
          >
            <Typography variant="h5" className={styleClasses.subTitle}>
              Suter Shield
            </Typography>
            <Typography variant="h3" className={styleClasses.mainTitle}>
              Trustless and Universal layer-2 solution to protect your
              transaction privacy.
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              className={styleClasses.subTitle}
            >
              Millions of transactions are taking place on blockchain everyday,
              but people have to expose individual privacy as anyone who knows
              your address can read your entire financial history. Suterusu
              invented a trustless and universal layer-2 privacy-protection
              protocol - Suter Shield delinks the sender and receiver address,
              and
              <span style={{ color: "#191919", fontWeight: "bold" }}>
                &nbsp;give you full protection for your transaction data via
                advanced cryptography.
              </span>
            </Typography>
          </Grid>
          <Grid item md={5} p={2}>
            <img src={sideImg} alt="suter-shield" style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          width="95%"
          mt={{ xs: 4, md: 6 }}
        >
          {gridInfo.map((item) => (
            <Grid item md={4} pr={4} key={item.heading}>
              <BoxedContainer>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  sx={{ pt: 4, pl: 2, pb: 2, pr: 2 }}
                >
                  <Grid
                    item
                    sx={{ position: "absolute", mt: "-13px", pl: "12px" }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      sx={{ background: "rgb(198, 198, 198)", px: "5px" }}
                    >
                      {item.heading}
                    </Typography>
                  </Grid>
                  <Grid item className={styleClasses.boxDetCont}>
                    <Typography
                      sx={{ mt: 2, px: 2 }}
                      className={styleClasses.boxDetText}
                    >
                      {item.detail}
                    </Typography>
                  </Grid>
                </Grid>
              </BoxedContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SuterShield;
