import React from "react";
import { Users, Package, FileText, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarOpen, sidebarCollapsed, toggleSidebar }) => {
  const sections = [
    { id: "customer", label: "Customer", icon: <Users />, path: "/" },
    { id: "product", label: "Product", icon: <Package />, path: "/product" },
    {
      id: "quotation",
      label: "Quotation",
      icon: <FileText />,
      path: "/quotation",
    },
  ];

  return (
    <aside
      className={`sidebar ${sidebarOpen ? "open" : ""} ${
        sidebarCollapsed ? "collapsed" : ""
      }`}
    >
      <div className="mobile-sidebar-header">
        <div className="mobile-logo">
          <div className="logo">MA</div>
          <div className="logo-text">
            <h1>My App</h1>
            <p>Dashboard v2.0</p>
          </div>
        </div>
        <button className="close-btn" onClick={toggleSidebar}>
          <X />
        </button>
      </div>

      {/* Sidebar Header */}
      <div className="sidebar-header collapsed">
        <div className="logo">MA</div>
      </div>
      <div className="sidebar-header expanded">
        <div className="logo">MA</div>
        <div className="logo-text">
          <h1>My App</h1>
          <p>Dashboard v2.0</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {sections.map((sec) => (
            <li key={sec.id}>
              <NavLink
                to={sec.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                {sec.icon}
                <span className="nav-label">{sec.label}</span>
                <div className="tooltip">{sec.label}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer expanded">
        <div className="user-info-sidebar">
          <div className="user-avatar-sidebar">U</div>
          <div className="user-details">
            <p className="user-name">User Name</p>
            <p className="user-email">user@example.com</p>
          </div>
        </div>
      </div>
      <div className="sidebar-footer collapsed">
        <div className="user-avatar-sidebar">U</div>
      </div>
    </aside>
  );
};

export default Sidebar;
