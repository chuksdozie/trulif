import React from "react";
import MainText from "../../atoms/text/MainText";
import graph from "../../resources/miniGraph.png";
import { main, left, right, detailsCont, first, mini } from "./Style";

const BlockCard = () => {
  return (
    <div style={main}>
      <div style={left}>
        <div style={{ padding: "15px 15px 0px" }}>
          <MainText
            text={"Ralmond Co."}
            size="17px"
            weight="600"
            color="black"
          />
        </div>
        <div style={detailsCont}>
          <div style={first}>
            <MainText
              text={"+ 34%"}
              size="17px"
              weight="normal"
              color="black"
            />
            <MainText
              text={"total return"}
              size="12px"
              weight="normal"
              color="#828282"
            />
          </div>
          <div style={first}>
            <MainText text={"1.2m"} size="17px" weight="600" color="black" />
            <MainText
              text={"value managed"}
              size="12px"
              weight="normal"
              color="#828282"
            />
          </div>
        </div>
      </div>
      <div style={right}>
        <img style={mini} src={graph} alt="the mini graph" />
      </div>
    </div>
  );
};

export default BlockCard;
