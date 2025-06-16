import React from 'react';
import './Sidebar.scss';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const handleNavClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Team Dashboard</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item active" onClick={handleNavClick}>
            <span>📊 Dashboard</span>
          </li>
          <li className="nav-item" onClick={handleNavClick}>
            <span>🧑‍🤝‍🧑 Teams</span>
          </li>
          <li className="nav-item" onClick={handleNavClick}>
            <span>🙋‍♂️ Members</span>
          </li>
          <li className="nav-item" onClick={handleNavClick}>
            <span>📈 Analytics</span>
          </li>
          <li className="nav-item" onClick={handleNavClick}>
            <span>⚙️ Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

