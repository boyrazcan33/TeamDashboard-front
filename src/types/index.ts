// Basic types for the team dashboard

export interface Member {
  id: number;
  name: string;
  role: string;
  email: string;
}

export interface Team {
  id: number;
  name: string;
  createdAt: string; //  since API returns it as string
  members: Member[];
}

// This will help us manage what view weare showing
export type ViewType = 'list' | 'details';

// New interface for our app state
export interface AppState {
  currentView: ViewType;
  selectedTeam: Team | null; 
}