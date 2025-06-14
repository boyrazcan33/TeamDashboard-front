import React from 'react';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Team Dashboard</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item active">
            <span>📊 Dashboard</span>
          </li>
          <li className="nav-item">
            <span>🧑‍🤝‍🧑 Teams</span>
          </li>
          <li className="nav-item">
            <span>🙋‍♂️ Members</span>
          </li>
          <li className="nav-item">
            <span>📈 Analytics</span>
          </li>
          <li className="nav-item">
            <span>⚙️ Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;