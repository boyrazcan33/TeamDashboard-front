# Team Dashboard

A responsive team management dashboard built with React and TypeScript. Clean, minimal UI focused on usability.

## Features

- View teams in card layout
- Search teams by name
- View team members and details
- Add new teams and members
- Edit team and member information
- Mobile responsive design
- 3D card hover effects
- Animated gradient headers
- !! Sidebar has 0 function.

## Getting Started

You'll need Node.js installed on your computer.

**Clone and install:**
```bash
git clone <your-repo-url>
cd team-dashboard
npm install
```

**Run the app:**
```bash
npm start
```

Then open http://localhost:3000 in your browser.

**Build for production:**
```bash
npm run build
```

## Tech Stack

- React 19 with TypeScript
- SCSS for styling
- CSS Grid and Flexbox for layout
- Fetch API for data

**NPM packages I added:**
- react-parallax-tilt - For 3D card hover effects
- sass - SCSS compiler

## Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable components
│   │   ├── Header.tsx/.scss   # Header with gradient text
│   │   ├── Modal.tsx/.scss    # Modal component
│   │   └── Sidebar.tsx/.scss  # Navigation sidebar
│   ├── teams/                 # Team components
│   │   ├── TeamList.tsx/.scss # Team cards with 3D effects
│   │   └── TeamDetails.tsx/.scss # Team member management
│   └── forms/                 # All form components
│       ├── AddTeamForm.tsx
│       ├── EditTeamForm.tsx
│       ├── AddMemberForm.tsx
│       ├── EditMemberForm.tsx
│       └── EditTeamForm.scss  # Shared form styles
├── types/                     # TypeScript interfaces
├── App.tsx                    # Main app
└── App.scss                   # Global styles
```

## What I Built

I built this step by step:

1. Set up React TypeScript project with SCSS
2. Created data types and API fetching
3. Built responsive layout with sidebar and header
4. Added team list with search
5. Created team details view with member management
6. Built forms and modals for adding/editing
7. Made it mobile responsive
8. Added 3D card effects (learned react-parallax-tilt)
9. Added animated gradient text (learned CSS animations)
10. Organized code into clean folder structure

**Things I learned while building this:**
- 3D card hover effects using react-parallax-tilt
- Animated CSS gradients for text and backgrounds

## Future Ideas

If this was a larger app with more features, I would add functionality to the sidebar and other elements. But I don't think adding lots of design elements is good for UX - it creates an over-designed effect.