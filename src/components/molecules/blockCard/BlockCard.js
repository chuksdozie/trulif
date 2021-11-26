import React, { useContext } from "react";
import MainText from "../../atoms/text/MainText";
import graph from "../../resources/miniGraph.png";
import { main, left, right, detailsCont, first, last, mini } from "./Style";
import { trulifData } from "../../../store/API";
import { DataContext } from "../../../store/Context";

const BlockCard = () => {
  // context starts here
  const { setSelected } = useContext(DataContext);
  // context ends here

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {trulifData.map((i, id) => (
        <div key={id} style={main} onClick={() => setSelected(i)}>
          <div style={left}>
            <div style={{ padding: "15px 15px 0px" }}>
              <MainText text={i.name} size="17px" weight="600" color="black" />
            </div>
            <div style={detailsCont}>
              <div style={first}>
                <MainText
                  text={i.token_return}
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
              <div style={last}>
                <MainText
                  text={`$${i.value_managed}`}
                  size="17px"
                  weight="600"
                  color="black"
                />
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
      ))}
    </div>
  );
};

export default BlockCard;
