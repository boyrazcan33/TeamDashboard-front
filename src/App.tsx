import React, { useState, useEffect } from 'react';
import { Team } from './types';
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

  // single return with conditional rendering
  return (
    <div className="app">
      <h1>Team Dashboard</h1>
      
      {/* show loading or teams based on loading state */}
      {loading ? (
        <p>Loading teams...</p>
      ) : (
        <>
          <p>Found {teams.length} teams</p>
          <div className="teams-preview">
            {teams.map(team => (
              <div key={team.id} className="team-card">
                <h3>{team.name}</h3>
                <p>{team.members.length} members</p>
                <small>Created: {team.createdAt}</small>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;