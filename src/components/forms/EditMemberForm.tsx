import React, { useState } from 'react';
import { Member } from '../../types';
import './EditTeamForm.scss'; // reuse same styles

interface EditMemberFormProps {
  member: Member;
  onSave: (updatedMember: Member) => void;
  onCancel: () => void;
}

function EditMemberForm({ member, onSave, onCancel }: EditMemberFormProps) {
  // form state
  const [name, setName] = useState(member.name);
  const [role, setRole] = useState(member.role);
  const [email, setEmail] = useState(member.email);
  const [saving, setSaving] = useState(false);

  // handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      alert('Name and email are required');
      return;
    }

    setSaving(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const updatedMember: Member = {
        ...member,
        name: name.trim(),
        role: role.trim(),
        email: email.trim()
      };
      
      onSave(updatedMember);
      
    } catch (error) {
      alert('Failed to save member');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-team-form">
      <div className="form-group">
        <label htmlFor="memberName">Name</label>
        <input
          id="memberName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          disabled={saving}
          autoFocus
        />
      </div>

      <div className="form-group">
        <label htmlFor="memberRole">Role</label>
        <input
          id="memberRole"
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-input"
          disabled={saving}
        />
      </div>

      <div className="form-group">
        <label htmlFor="memberEmail">Email</label>
        <input
          id="memberEmail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          disabled={saving}
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn-secondary" disabled={saving}>
          Cancel
        </button>
        <button type="submit" className="btn-primary" disabled={saving || !name.trim() || !email.trim()}>
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}

export default EditMemberForm;