import React from "react";
import { main } from "./Style";
import Grid from "@mui/material/Grid";
import WhiteButton from "../../components/atoms/buttons/WhiteButton";
import MainText from "../../components/atoms/text/MainText";

const Welcome = () => {
  return (
    <div style={main}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10} justifyContent="center">
          <MainText
            text="Welcome To Trulif"
            size="32px"
            color="white"
            weight="600"
          />
        </Grid>
        <Grid item xs={7.5} justifyContent="center" padding="10px 0px 30px">
          <MainText
            text="Making investing easier with non-custodial asset management on the blockchain"
            size="18px"
            color="white"
          />
        </Grid>
        <Grid item xs={10} justifyContent="center" padding="20px 0px">
          <WhiteButton text="Create a fund" />
        </Grid>
        <Grid item xs={10} justifyContent="center">
          <WhiteButton text="Invest in fund" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
