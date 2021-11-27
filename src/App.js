import "./App.css";
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataContext, PurchaseContext, TokenContext } from "./store/Context";
import MainText from "./components/atoms/text/MainText";
import Logo from "./components/resources/Logo.png";
import Welcome from "./pages/welcome/Welcome";
import Connect from "./pages/connect/Connect";
import Purchase from "./pages/purchase/Purchase";
import Message from "./pages/message/Message";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  const [selected, setSelected] = useState();
  const [myToken, setMyToken] = useState();
  const [purchase, setPurchase] = useState([
    {
      name: "Momentum",
      ROI: "+74%",
      amount: "1,200,000",
    },
    {
      name: "Ubeswap Eco",
      ROI: "+26%",
      amount: "300,000",
    },
    {
      name: "Bull Flag",
      ROI: "+86%",
      amount: "1,400,000",
    },
    {
      name: "Ride the Bull",
      ROI: "+165%",
      amount: "2,500,000",
    },
    {
      name: "Layer 1",
      ROI: "+7%",
      amount: "4,700,000",
    },
    {
      name: "Lower Volatility",
      ROI: "+45%",
      amount: "600,000",
    },
  ]);
  const providerValue = useMemo(
    () => ({ selected, setSelected }),
    [selected, setSelected]
  );
  const purchaseValue = useMemo(
    () => ({ purchase, setPurchase }),
    [purchase, setPurchase]
  );

  const tokenValue = useMemo(
    () => ({ myToken, setMyToken }),
    [myToken, setMyToken]
  );

  return (
    <Router>
      <DataContext.Provider value={providerValue}>
        <PurchaseContext.Provider value={purchaseValue}>
          <TokenContext.Provider value={tokenValue}>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/connect" element={<Connect />} />
                <Route exact path="/token" element={<Purchase />} />
                <Route exact path="/messages" element={<Message />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
              </Routes>
            </div>
            <div className="NotMobile">
              <img
                style={{ width: "200px", height: "200px" }}
                src={Logo}
                alt="Trulif Logo"
              />
              <div
                style={{ width: "80%", margin: "30px", textAlign: "center" }}
              >
                <MainText
                  text="Desktop view is not available yet. Please use a Mobile phone instead"
                  color="#fff"
                  weight="400"
                  size="28px"
                />
              </div>
            </div>
          </TokenContext.Provider>
        </PurchaseContext.Provider>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
