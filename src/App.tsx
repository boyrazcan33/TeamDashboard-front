import React, { useState, useEffect } from 'react';
import { Team, ViewType } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TeamList from './components/TeamList';
import TeamDetails from './components/TeamDetails';
import Modal from './components/Modal';
import AddTeamForm from './components/AddTeamForm';
import './App.scss';

function App() {
  // keep our teams data here
  const [teams, setTeams] = useState<Team[]>([]);
  
  // track if we are still getting data
  const [loading, setLoading] = useState(true);
  
  // track which view we are showing
  const [currentView, setCurrentView] = useState<ViewType>('list');
  
  // track which team is selected for details view
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  
  // add team modal state
  const [isAddTeamModalOpen, setIsAddTeamModalOpen] = useState(false);
  
  // mobile sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    setSelectedTeam(team);
    setCurrentView('details');
    setIsSidebarOpen(false); // close sidebar on mobile
  };

  // handle back button click
  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedTeam(null);
  };

  // handle team update from edit form
  const handleTeamUpdate = (updatedTeam: Team) => {
    console.log('updating team:', updatedTeam);
    
    // update teams array with new data
    setTeams(prevTeams => 
      prevTeams.map(team => 
        team.id === updatedTeam.id ? updatedTeam : team
      )
    );
    
    // update selected team so details view shows new data
    setSelectedTeam(updatedTeam);
  };

  // handle adding new team
  const handleAddTeam = () => {
    setIsAddTeamModalOpen(true);
  };

  const handleSaveNewTeam = (newTeamData: Omit<Team, 'id'>) => {
    // generate new id
    const newId = Math.max(...teams.map(t => t.id), 0) + 1;
    
    const newTeam: Team = {
      ...newTeamData,
      id: newId
    };

    setTeams(prevTeams => [...prevTeams, newTeam]);
    setIsAddTeamModalOpen(false);
  };

  // mobile menu functions
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // figure out what to show in header
  const getHeaderInfo = () => {
    if (currentView === 'details' && selectedTeam) {
      return {
        title: selectedTeam.name,
        subtitle: `${selectedTeam.members.length} team members`,
        showAddButton: false
      };
    }
    
    return {
      title: 'Teams Overview',
      subtitle: `Managing ${teams.length} teams`,
      showAddButton: true
    };
  };

  const headerInfo = getHeaderInfo();

  // single return with conditional rendering
  return (
    <div className={`app ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* mobile menu button */}
      <button className="mobile-menu-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* mobile backdrop */}
      <div 
        className={`sidebar-backdrop ${isSidebarOpen ? 'show' : ''}`}
        onClick={closeSidebar}
      />

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      <div className="main-content">
        <Header 
          title={headerInfo.title}
          subtitle={headerInfo.subtitle}
          onAddTeam={handleAddTeam}
          showAddButton={headerInfo.showAddButton}
        />
        
        {/* show loading or content based on loading state */}
        {loading ? (
          <div className="loading-state">
            <p>Loading teams...</p>
          </div>
        ) : (
          // show different content based on current view
          currentView === 'list' ? (
            <TeamList 
              teams={teams}
              onTeamClick={handleTeamClick}
            />
          ) : (
            selectedTeam && (
              <TeamDetails 
                team={selectedTeam}
                onBackClick={handleBackToList}
                onTeamUpdate={handleTeamUpdate}
              />
            )
          )
        )}
      </div>

      {/* add team modal */}
      <Modal 
        isOpen={isAddTeamModalOpen} 
        onClose={() => setIsAddTeamModalOpen(false)} 
        title="Create New Team"
      >
        <AddTeamForm 
          onSave={handleSaveNewTeam} 
          onCancel={() => setIsAddTeamModalOpen(false)} 
        />
      </Modal>
    </div>
  );
}

export default App;