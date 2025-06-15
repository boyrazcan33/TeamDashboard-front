// Basic types for our team dashboard
// These match the structure from the API

export interface Member {
  id: number;
  name: string;
  role: string;
  email: string;
}

export interface Team {
  id: number;
  name: string;
  createdAt: string; // keeping as string since API returns it as string
  members: Member[];
}

// This will help us manage what view we're showing
export type ViewType = 'list' | 'details';

// New interface for our app state
export interface AppState {
  currentView: ViewType;
  selectedTeam: Team | null; // null when no team selected
}