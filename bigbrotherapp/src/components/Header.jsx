import React from "react";
import { Menu, Bell, User, ChevronDown, Search } from "lucide-react";

const Header = ({ toggleCollapse, toggleSidebar }) => {
  return (
    <>
      {/* Desktop Header */}
      <header className="desktop-header">
        <div className="header-left">
          <button className="menu-toggle" onClick={toggleCollapse}>
            <Menu />
          </button>
          <div className="header-logo">
            <div className="logo">MA</div>
            <div className="logo-text">
              <h1>My App</h1>
              <p>Dashboard v2.0</p>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="search-container">
            <Search />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

          <button className="notification-btn">
            <Bell />
            <span className="notification-badge"></span>
          </button>

          <div className="user-profile">
            <div className="user-avatar">
              <User />
            </div>
            <div className="user-info">
              <p className="user-name">John Doe</p>
              <p className="user-role">Admin</p>
            </div>
            <ChevronDown />
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="mobile-logo">
          <div className="logo">MA</div>
          <div className="logo-text">
            <h1>My App</h1>
            <p>Dashboard v2.0</p>
          </div>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleSidebar}>
          <Menu />
        </button>
      </header>
    </>
  );
};

export default Header;
