import React, { useState } from 'react';
import { Team } from '../../types';
import './EditTeamForm.scss';


// props for edit team form
interface EditTeamFormProps {
  team: Team;
  onSave: (updatedTeam: Team) => void;
  onCancel: () => void;
}

function EditTeamForm({ team, onSave, onCancel }: EditTeamFormProps) {
  // form state - starts with current team data
  const [teamName, setTeamName] = useState(team.name);
  const [saving, setSaving] = useState(false);

  // handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    
    // dont submit if name is empty
    if (!teamName.trim()) {
      alert('Team name cannot be empty');
      return;
    }

    setSaving(true);
    
    try {
      // simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // create updated team object
      const updatedTeam: Team = {
        ...team, // keep everything the same
        name: teamName.trim() // except update the name
      };
      
      console.log('saving team:', updatedTeam);
      
      // call parent function with updated team
      onSave(updatedTeam);
      
    } catch (error) {
      console.error('failed to save team:', error);
      alert('Failed to save team. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-team-form">
      <div className="form-group">
        <label htmlFor="teamName">Team Name</label>
        <input
          id="teamName"
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="form-input"
          placeholder="Enter team name"
          disabled={saving}
          autoFocus
        />
      </div>

      <div className="form-actions">
        <button 
          type="button" 
          onClick={onCancel}
          className="btn-secondary"
          disabled={saving}
        >
          Cancel
        </button>
        
        <button 
          type="submit" 
          className="btn-primary"
          disabled={saving || !teamName.trim()}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}

export default EditTeamForm;