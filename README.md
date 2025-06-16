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
team-dashboard/
├── 📁 public/
│   ├── 📄 index.html
│   ├── 📄 manifest.json
│   └── 📄 robots.txt
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 ui/                    # Reusable UI components
│   │   │   ├── 📄 Header.tsx         # Header with gradient text
│   │   │   ├── 📄 Header.scss
│   │   │   ├── 📄 Modal.tsx          # Modal component
│   │   │   ├── 📄 Modal.scss
│   │   │   ├── 📄 Sidebar.tsx        # Navigation sidebar
│   │   │   └── 📄 Sidebar.scss
│   │   ├── 📁 teams/                 # Team-specific components
│   │   │   ├── 📄 TeamList.tsx       # Team cards with 3D effects
│   │   │   ├── 📄 TeamList.scss
│   │   │   ├── 📄 TeamDetails.tsx    # Team member management
│   │   │   └── 📄 TeamDetails.scss
│   │   └── 📁 forms/                 # Form components
│   │       ├── 📄 AddTeamForm.tsx
│   │       ├── 📄 EditTeamForm.tsx
│   │       ├── 📄 AddMemberForm.tsx
│   │       ├── 📄 EditMemberForm.tsx
│   │       └── 📄 EditTeamForm.scss  # Shared form styles
│   ├── 📁 types/
│   │   └── 📄 index.ts               # TypeScript interfaces
│   ├── 📄 App.tsx                    # Main app component
│   ├── 📄 App.scss                   # Global styles
│   ├── 📄 index.tsx                  # React entry point
│   ├── 📄 index.css                  # Base CSS
│   └── 📄 react-app-env.d.ts        # React types
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 README.md
└── 📄 .gitignore
```

### Component Architecture

```
App.tsx (Main Container)
├── Sidebar.tsx (Navigation)
├── Header.tsx (Dynamic Title & Actions)
└── Main Content Area
    ├── TeamList.tsx (Grid View)
    │   └── TeamCard.tsx (3D Tilt Effect)
    └── TeamDetails.tsx (Detail View)
        ├── MemberCard.tsx (Member Info)
        └── Modals
            ├── EditTeamForm.tsx
            ├── AddMemberForm.tsx
            └── EditMemberForm.tsx
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

## Key Features by Component

| Component | Features |
|-----------|----------|
| **TeamList** | 3D card effects, search functionality, responsive grid |
| **TeamDetails** | Member management, CRUD operations, back navigation |
| **Header** | Animated gradient text, dynamic content, responsive actions |
| **Modal** | Escape key handling, backdrop click, smooth animations |
| **Forms** | Validation, loading states, consistent styling |
| **Sidebar** | Mobile menu, responsive design, navigation structure |

## Future Ideas

If this was a larger app with more features, I would add functionality to the sidebar and other elements. But I don't think adding lots of design elements is good for UX - it creates an over-designed effect.