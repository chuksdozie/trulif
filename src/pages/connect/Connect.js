import React from "react";
import { Link } from "react-router-dom";
import { main, link } from "./Style";
import Grid from "@mui/material/Grid";
import MainText from "../../components/atoms/text/MainText";
import Header from "../../components/molecules/header/Header";
import BlockCard from "../../components/molecules/blockCard/BlockCard";
import GreenButton from "../../components/atoms/buttons/GreenButton";

const Connect = () => {
  return (
    <div style={main}>
      <Grid container justifyContent="center">
        <Grid
          container
          margin="10px auto"
          position="fixed"
          bottom="75px"
          justifyContent="center"
        >
          <div style={{ width: "85%" }}>
            <GreenButton text="Continue" />
          </div>
        </Grid>
        <Grid container xs={11} margin="40px 0px 10px">
          <MainText text="Discover" size="32px" color="#333333" weight="600" />
        </Grid>

        <Grid container item xs={11} margin="10px 0px">
          <Link to="/" style={link}>
            <BlockCard />
          </Link>
        </Grid>
        <Grid container item xs={11} margin="10px 0px">
          <Link to="/" style={link}>
            <BlockCard />
          </Link>
        </Grid>
        <Grid container item xs={11} margin="10px 0px">
          <Link to="/" style={link}>
            <BlockCard />
          </Link>
        </Grid>
        <Grid container item xs={11} margin="10px 0px">
          <Link to="/" style={link}>
            <BlockCard />
          </Link>
        </Grid>
        <Grid container item xs={11} margin="10px 0px">
          <Link to="/" style={link}>
            <BlockCard />
          </Link>
        </Grid>
        <Grid container item xs={11} margin="10px 0px">
          <Link to="/" style={link}>
            <BlockCard />
          </Link>
        </Grid>

        <Header />
      </Grid>
    </div>
  );
};

export default Connect;
