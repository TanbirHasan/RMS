import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/auth/Login";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import Overview from "./Components/dashboard/dashboardChild/Overview";
import RoleSelection from "./Components/dashboard/dashboardChild/RoleSelection";
import RoleCreation from "./Components/dashboard/dashboardChild/RoleCreation";
import Inventory from "./Components/dashboard/dashboardChild/Inventory";

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/overview" element={<Overview/>}/>
            <Route path="/dashboard/roleSelection" element={<RoleSelection/>}/>
            <Route path="/dashboard/roleCreation" element={<RoleCreation/>}/>
            <Route path="/dashboard/inventory" element={<Inventory/>}/>
          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
