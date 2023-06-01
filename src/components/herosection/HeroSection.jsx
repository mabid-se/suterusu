// ---| React Imports |---
import React, { useState } from "react";

// ---| MUI Imports |---
import { Box, Container, Grid, Typography } from "@mui/material";

// ---| Project Imports |---
import { useStyles } from "./HeroSection-styles";
import Navbar from "../navbar/Navbar";
import Button from "../button/Button";
import illusImg1 from "../../assets/images/illustration-1.png";
import illusImg2 from "../../assets/images/illustration-2.png";
import illusImg3 from "../../assets/images/illustration-3.png";
import illusImg4 from "../../assets/images/illustration-4.png";
import illusImg5 from "../../assets/images/illustration-4.png";
import illusImg6 from "../../assets/images/illustration-4.png";
import bscImg from "../../assets/icons/bsc-grey.png";
import ethereumImg from "../../assets/icons/eth-grey.png";
import polygonImg from "../../assets/icons/polygon.svg";
import fantomImg from "../../assets/icons/fantom.svg";
import nearImg from "../../assets/icons/eth-grey.png";
import avalancheImg from "../../assets/icons/eth-grey.png";
import moreImg from "../../assets/icons/more.png";
import { getValue } from "@testing-library/user-event/dist/utils";

const HeroSection = () => {
  const styleClasses = useStyles();

  const statistics = [
    { number: "$112,134,238", text: "Total Tranasction Volume" },
    { number: "1,421", text: "Total Active Users" },
    { number: "7,842", text: "Total Deposits" },
    { number: "$ 8,763", text: "Funds in Suter Shield" },
  ];

  const currencyList = [
    { text: "bsc", img: bscImg },
    { text: "ethereum", img: ethereumImg },
    { text: "polygon", img: polygonImg },
    { text: "fantom", img: fantomImg },
    { text: "near", img: nearImg },
    { text: "avalanche", img: avalancheImg },
  ];

  const [activeBtn, setActiveBtn] = useState("bsc");
  let btnText = "";
  let imgSrc = "";

  if (activeBtn === "bsc") {
    btnText = "bsc";
    imgSrc = illusImg1;
  } else if (activeBtn === "ethereum") {
    btnText = "ethereum";
    imgSrc = illusImg2;
  } else if (activeBtn === "polygon") {
    btnText = "polygon";
    imgSrc = illusImg3;
  } else if (activeBtn === "fantom") {
    btnText = "fantom";
    imgSrc = illusImg4;
  } else if (activeBtn === "near") {
    btnText = "near";
    imgSrc = illusImg5;
  } else if (activeBtn === "avalanche") {
    btnText = "avalanche";
    imgSrc = illusImg6;
  }

  return (
    <Box
      sx={{
        width: "100%",
        // background: "#14141b",
        background: "#0c4a6e",
        height: { md: "125vh", xl: "80vh" },
      }}
    >
      <Navbar />

      <Container sx={{ zIndex: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width={{ xs: "90%", sm: "80%", md: "60%", lg: "50%" }}
          px={{ xs: 1, md: 2, lg: 0 }}
        >
          <Grid item position="relative" zIndex={99}>
            <Typography variant="h2" className={styleClasses.heading}>
              <span style={{ fontWeight: "800" }}>
                Private Payment Infrastructure&nbsp;
              </span>
              for Cryptocurrency
            </Typography>
          </Grid>
          <Grid
            item
            mt={1}
            position="relative"
            zIndex={99}
            display={{ xs: "none", sm: "flex" }}
          >
            <Typography variant="body1" className={styleClasses.detailsText}>
              Millions of Crypto holders on either Ethereum or Binance Smart
              Chain, can send, transfer and withdraw privately via Suter Shield
              network without exposing their private transaction data.
            </Typography>
          </Grid>
          <Grid item mt={4} width="80%" position="relative" zIndex={99}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              {currencyList.map((item) => (
                <Grid
                  item
                  key={item.text}
                  width="85px"
                  onClick={() => setActiveBtn(item.text.toString())}
                >
                  <img src={item.img} style={{ width: "90%" }} />
                </Grid>
              ))}
              <Grid item width="85px">
                <img src={moreImg} style={{ width: "90%" }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item mt={4} position="relative" zIndex={99}>
            <Button btnLink="/" btnText={`Launch App on ${btnText}`} />
          </Grid>
          <Grid
            item
            sx={{
              position: "absolute",
              right: 0,
              width: "720px",
            }}
          >
            <img
              src={imgSrc}
              alt="hero-illustration"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          mt={{ xs: 3, md: 4 }}
          position="relative"
          zIndex={99}
        >
          {statistics.map((item) => (
            <Grid item md={2} key={item.text}>
              <Typography variant="h5" className={styleClasses.statNumber}>
                {item.number}
              </Typography>
              <Typography variant="body2" className={styleClasses.statText}>
                {item.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
