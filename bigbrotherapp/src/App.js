import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Customer from "./pages/Customer";
import Product from "./pages/Product";
import Quotation from "./pages/Quotation";
import "../src/style/SideMenuCode.css";
import CustomerList from "./pages/CustomerList";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleCollapse = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <Router>
      <div className="app-container">
        <Header toggleCollapse={toggleCollapse} toggleSidebar={toggleSidebar} />
        <div className="main-wrapper">
          <Sidebar
            sidebarOpen={sidebarOpen}
            sidebarCollapsed={sidebarCollapsed}
            toggleSidebar={toggleSidebar}
          />
          {sidebarOpen && (
            <div className="overlay show" onClick={toggleSidebar}></div>
          )}

          <main
            className={`main-content ${sidebarCollapsed ? "collapsed" : ""}`}
          >
            <Routes>
              <Route path="/" element={<Customer />} />
              <Route path="/CustomerList" element={<CustomerList />} />
              <Route path="/product" element={<Product />} />
              <Route path="/quotation" element={<Quotation />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
