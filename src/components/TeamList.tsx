import React, { useState } from 'react';
import { Team } from '../types';
import './TeamList.scss';

// props that this component expects
interface TeamListProps {
  teams: Team[];
  onTeamClick: (team: Team) => void; // function to call when team is clicked
}

function TeamList({ teams, onTeamClick }: TeamListProps) {
  // state for search input
  const [searchTerm, setSearchTerm] = useState('');

  // filter teams based on search term
  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="team-list">
      {/* search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search teams..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      {/* show filtered results count */}
      <div className="results-info">
        {searchTerm && (
          <p>Found {filteredTeams.length} teams matching "{searchTerm}"</p>
        )}
      </div>

      {/* team cards */}
      <div className="teams-grid">
        {filteredTeams.length === 0 ? (
          <div className="no-results">
            <p>No teams found</p>
          </div>
        ) : (
          filteredTeams.map(team => (
            <div 
              key={team.id} 
              className="team-card"
              onClick={() => onTeamClick(team)}
            >
              <h3>{team.name}</h3>
              <p>{team.members.length} members</p>
              <small>Created: {team.createdAt}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TeamList;