import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainText from "./components/atoms/text/MainText";
import Logo from "./components/resources/Logo.png";
import Welcome from "./pages/welcome/Welcome";
import Connect from "./pages/connect/Connect";
import Purchase from "./pages/purchase/Purchase";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/connect" element={<Connect />} />
          <Route exact path="/token" element={<Purchase />} />
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
            text="Desktop view is not available. Please use a Mobile phone instead"
            color="#fff"
            weight="400"
            size="28px"
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
