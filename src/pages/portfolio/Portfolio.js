import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  tokenCont,
  nameAvatar,
  graph,
  belowGraph,
  inBelowGraph,
  belowGraphy,
} from "./Style";
import MainText from "../../components/atoms/text/MainText";
import Header from "../../components/molecules/header/Header";
import Avatar from "../../components/resources/icons/avatar.png";
import Graph from "../../components/resources/Chartgraph.png";
import { trulifData } from "../../store/API";
import { DataContext } from "../../store/Context";

const Portfolio = () => {
  const { setSelected } = useContext(DataContext);
  return (
    <div>
      <div style={tokenCont}>
        <div style={nameAvatar}>
          <MainText
            text={`Your Portfolio`}
            color="#333333"
            weight="600"
            size="32px"
          />
          <img
            style={{ width: "30px", height: "30px" }}
            src={Avatar}
            alt="avatar"
          />
        </div>
        <div style={graph}>
          <img style={{ width: "100%" }} src={Graph} alt="graph" />
        </div>
        <div style={belowGraph}>
          <MainText
            text={`Headings`}
            color="#333333"
            weight="500"
            size="15px"
          />
          <div style={inBelowGraph}>
            <MainText text={`%`} color="#333333" weight="500" size="15px" />
            <MainText
              text={`Amount`}
              color="#333333"
              weight="500"
              size="15px"
            />
          </div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/token">
          {trulifData.map((i, id) => (
            <div key={id} style={belowGraphy} onClick={() => setSelected(i)}>
              <MainText
                text={i.name}
                color="#333333"
                weight="normal"
                size="17px"
              />
              <div style={inBelowGraph}>
                <MainText
                  text={i.token_return}
                  color="#333333"
                  weight="normal"
                  size="17px"
                />
                <MainText
                  text={i.value_managed}
                  color="#333333"
                  weight="normal"
                  size="17px"
                />
              </div>
            </div>
          ))}
        </Link>

        <Header />
      </div>
    </div>
  );
};

export default Portfolio;
