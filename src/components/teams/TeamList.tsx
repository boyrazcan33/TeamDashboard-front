import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt'; // 3D lib for hover effect
import './TeamList.scss';
import { Team } from '../../types';


// props  component expects
interface TeamListProps {
  teams: Team[];
  onTeamClick: (team: Team) => void; // when team is clicked
}

function TeamList({ teams, onTeamClick }: TeamListProps) {

  const [searchTerm, setSearchTerm] = useState('');

  // filter teams based on search term (case insensitive!)
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
            <Tilt
              key={team.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
              transitionSpeed={300}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="team-card-tilt"
            >
              <div 
                className="team-card"
                onClick={() => onTeamClick(team)}
              >
                <h3>{team.name}</h3>
                <p>{team.members.length} members</p>
                <small>Created: {team.createdAt}</small>
              </div>
            </Tilt>
          ))
        )}
      </div>
    </div>
  );
}

export default TeamList;