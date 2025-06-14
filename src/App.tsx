import React, { useState, useEffect } from 'react';
import { Team } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TeamList from './components/TeamList';
import './App.scss';

function App() {
  // keep our teams data here
  const [teams, setTeams] = useState<Team[]>([]);
  
  // track if we are still getting data
  const [loading, setLoading] = useState(true);

  // run this when component loads
  useEffect(() => {
    // get teams from API
    const fetchTeams = async () => {
      try {
        console.log('getting teams from server');
        
        // ask server for data
        const response = await fetch('https://storage.aderize.com/Erik/Test-Works/teams.json');
        
        // turn response into javascript object
        const data = await response.json();
        
        console.log('got teams:', data);
        
        // save teams to our state
        setTeams(data);
        
        // not loading anymore
        setLoading(false);
        
      } catch (error) {
        console.error('failed to get teams:', error);
        setLoading(false);
      }
    };

    // start getting data
    fetchTeams();
  }, []); // empty array means run only once

  // handle when user clicks on a team
  const handleTeamClick = (team: Team) => {
    console.log('clicked team:', team.name);
    // we will add team details view later
  };

  // single return with conditional rendering
  return (
    <div className="app">
      <Sidebar />
      
      <div className="main-content">
        <Header 
          title="Teams Overview" 
          subtitle={`Managing ${teams.length} teams`}
        />
        
        {/* show loading or teams based on loading state */}
        {loading ? (
          <div className="loading-state">
            <p>Loading teams...</p>
          </div>
        ) : (
          <TeamList 
            teams={teams}
            onTeamClick={handleTeamClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;