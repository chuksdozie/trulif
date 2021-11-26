import "./App.css";
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataContext } from "./store/Context";
import MainText from "./components/atoms/text/MainText";
import Logo from "./components/resources/Logo.png";
import Welcome from "./pages/welcome/Welcome";
import Connect from "./pages/connect/Connect";
import Purchase from "./pages/purchase/Purchase";
import Message from "./pages/message/Message";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  const [selected, setSelected] = useState();
  const providerValue = useMemo(
    () => ({ selected, setSelected }),
    [selected, setSelected]
  );
  return (
    <Router>
      <DataContext.Provider value={providerValue}>
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
          <div style={{ width: "80%", margin: "30px", textAlign: "center" }}>
            <MainText
              text="Desktop view is not available yet. Please use a Mobile phone instead"
              color="#fff"
              weight="400"
              size="28px"
            />
          </div>
        </div>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
