// src/App.js
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Sidebar/Home/Home";
import Input from "./pages/Input/Input";
import MacroData from "./pages/MacroData";

import RiskCapital from "./pages/RiskCapital";
import LoanCashFlow from "./pages/LoanCashFlow";
import Pd from "./pages/Pd";
import Reports from "./pages/Reports";

function App() {
  return (
    <Router>
      <div className="main_page">
        <div className="left_panel">
          <SideBar />
        </div>

        <div className="right_panel">
          <Routes>
            <Route path="/input" element={<Input />} />
            <Route path="/macroData" element={<MacroData />} />
            <Route path="/loanCashFlow" element={<LoanCashFlow />} />
            <Route path="/pd" element={<Pd />} />
          
            <Route path="/riskcapital" element={<RiskCapital />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/" element={<Home />} />

            <Route path="*" element={<>Not found</>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
