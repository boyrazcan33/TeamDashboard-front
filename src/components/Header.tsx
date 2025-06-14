import React from 'react';
import './Header.scss';

// props interface for Header component
interface HeaderProps {
  title: string;
  subtitle?: string; // optional prop
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="header">
      <div className="header-content">
        
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      
      <div className="header-actions">
        <button className="btn-primary">
          + Add Team
        </button>
      </div>
    </div>
  );
}

export default Header;