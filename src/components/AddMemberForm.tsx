import React, { useState } from 'react';
import { Member } from '../types';
import './EditTeamForm.scss';

interface AddMemberFormProps {
  onSave: (newMember: Omit<Member, 'id'>) => void; // new member without id
  onCancel: () => void;
}

function AddMemberForm({ onSave, onCancel }: AddMemberFormProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      alert('Name and email are required');
      return;
    }

    setSaving(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // create new member without id (parent will add id)
      const newMember = {
        name: name.trim(),
        role: role.trim() || 'Team Member',
        email: email.trim()
      };
      
      onSave(newMember);
      
    } catch (error) {
      alert('Failed to add member');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-team-form">
      <div className="form-group">
        <label htmlFor="newMemberName">Name</label>
        <input
          id="newMemberName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          placeholder="Enter member name"
          disabled={saving}
          autoFocus
        />
      </div>

      <div className="form-group">
        <label htmlFor="newMemberRole">Role</label>
        <input
          id="newMemberRole"
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-input"
          placeholder="e.g. Developer, Designer"
          disabled={saving}
        />
      </div>

      <div className="form-group">
        <label htmlFor="newMemberEmail">Email</label>
        <input
          id="newMemberEmail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          placeholder="member@company.com"
          disabled={saving}
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn-secondary" disabled={saving}>
          Cancel
        </button>
        <button type="submit" className="btn-primary" disabled={saving || !name.trim() || !email.trim()}>
          {saving ? 'Adding...' : 'Add Member'}
        </button>
      </div>
    </form>
  );
}

export default AddMemberForm;