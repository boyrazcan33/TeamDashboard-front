import React from 'react';
import './Header.scss';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onAddTeam?: () => void; // optional used for 'em
  showAddButton?: boolean; 
}

function Header({ title, subtitle, onAddTeam, showAddButton = false }: HeaderProps) {
  return (
    <div className="header">
      <div className="header-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      
      <div className="header-actions">
        {showAddButton && onAddTeam && (
          <button className="btn-primary" onClick={onAddTeam}>
            + Add Team
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;