import React, { useState } from 'react';
import { Team, Member } from '../types';
import Modal from './Modal';
import EditTeamForm from './EditTeamForm';
import EditMemberForm from './EditMemberForm';
import AddMemberForm from './AddMemberForm';
import './TeamDetails.scss';

interface TeamDetailsProps {
  team: Team;
  onBackClick: () => void;
  onTeamUpdate: (updatedTeam: Team) => void;
}

function TeamDetails({ team, onBackClick, onTeamUpdate }: TeamDetailsProps) {
  // modal states
  const [isEditTeamModalOpen, setIsEditTeamModalOpen] = useState(false);
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // team editing
  const handleEditTeam = () => setIsEditTeamModalOpen(true);
  const handleSaveTeam = (updatedTeam: Team) => {
    onTeamUpdate(updatedTeam);
    setIsEditTeamModalOpen(false);
  };

  // member editing
  const handleEditMember = (member: Member) => {
    setSelectedMember(member);
    setIsEditMemberModalOpen(true);
  };

  const handleSaveMember = (updatedMember: Member) => {
    const updatedTeam: Team = {
      ...team,
      members: team.members.map(member => 
        member.id === updatedMember.id ? updatedMember : member
      )
    };
    onTeamUpdate(updatedTeam);
    setIsEditMemberModalOpen(false);
    setSelectedMember(null);
  };

  // member adding
  const handleAddMember = () => setIsAddMemberModalOpen(true);
  
  const handleSaveNewMember = (newMemberData: Omit<Member, 'id'>) => {
    // generate new id (in real app this would come from server)
    const newId = Math.max(...team.members.map(m => m.id), 0) + 1;
    
    const newMember: Member = {
      ...newMemberData,
      id: newId
    };

    const updatedTeam: Team = {
      ...team,
      members: [...team.members, newMember]
    };
    
    onTeamUpdate(updatedTeam);
    setIsAddMemberModalOpen(false);
  };

  // close modals
  const closeAllModals = () => {
    setIsEditTeamModalOpen(false);
    setIsEditMemberModalOpen(false);
    setIsAddMemberModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="team-details">
      <div className="details-header">
        <button className="back-button" onClick={onBackClick}>
          ← Back to Teams
        </button>
        
        <div className="team-info">
          <h1>{team.name}</h1>
          <p className="team-meta">
            {team.members.length} members • Created {team.createdAt}
          </p>
        </div>
      </div>

      <div className="members-section">
        <h2>Team Members</h2>
        
        {team.members.length === 0 ? (
          <div className="no-members">
            <p>No members in this team yet</p>
          </div>
        ) : (
          <div className="members-grid">
            {team.members.map(member => (
              <div key={member.id} className="member-card">
                <div className="member-avatar">
                  {member.name.charAt(0).toUpperCase()}
                </div>
                
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-email">{member.email}</p>
                </div>
                
                <div className="member-actions">
                  <button 
                    className="btn-secondary"
                    onClick={() => handleEditMember(member)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="team-actions">
        <button className="btn-primary" onClick={handleAddMember}>
          Add Member
        </button>
        <button className="btn-secondary" onClick={handleEditTeam}>
          Edit Team
        </button>
      </div>

      {/* edit team modal */}
      <Modal isOpen={isEditTeamModalOpen} onClose={closeAllModals} title="Edit Team">
        <EditTeamForm team={team} onSave={handleSaveTeam} onCancel={closeAllModals} />
      </Modal>

      {/* edit member modal */}
      <Modal isOpen={isEditMemberModalOpen} onClose={closeAllModals} title="Edit Member">
        {selectedMember && (
          <EditMemberForm 
            member={selectedMember} 
            onSave={handleSaveMember} 
            onCancel={closeAllModals} 
          />
        )}
      </Modal>

      {/* add member modal */}
      <Modal isOpen={isAddMemberModalOpen} onClose={closeAllModals} title="Add New Member">
        <AddMemberForm onSave={handleSaveNewMember} onCancel={closeAllModals} />
      </Modal>
    </div>
  );
}

export default TeamDetails;