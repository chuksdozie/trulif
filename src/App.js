import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Connect from "./pages/connect/Connect";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
