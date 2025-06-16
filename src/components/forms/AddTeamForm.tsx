import React, { useState } from 'react';
import './EditTeamForm.scss';
import { Team } from '../../types';


interface AddTeamFormProps {
  onSave: (newTeam: Omit<Team, 'id'>) => void; // new team without id
  onCancel: () => void;
}

function AddTeamForm({ onSave, onCancel }: AddTeamFormProps) {
  const [teamName, setTeamName] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!teamName.trim()) {
      alert('Team name is required');
      return;
    }

    setSaving(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // create new team
      const newTeam = {
        name: teamName.trim(),
        createdAt: new Date().toISOString().split('T')[0], // today's date as YYYY-MM-DD
        members: [] // start with empty members
      };
      
      onSave(newTeam);
      
    } catch (error) {
      alert('Failed to create team');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-team-form">
      <div className="form-group">
        <label htmlFor="newTeamName">Team Name</label>
        <input
          id="newTeamName"
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
        <button type="button" onClick={onCancel} className="btn-secondary" disabled={saving}>
          Cancel
        </button>
        <button type="submit" className="btn-primary" disabled={saving || !teamName.trim()}>
          {saving ? 'Creating...' : 'Create Team'}
        </button>
      </div>
    </form>
  );
}

export default AddTeamForm;