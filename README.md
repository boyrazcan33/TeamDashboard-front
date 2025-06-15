# Team Dashboard

A responsive team management dashboard built with React and TypeScript.

## Features

- View teams in card layout
- Search teams by name
- View team members and details
- Add new teams and members
- Edit team and member information
- Mobile responsive design
- 3D card tilt effects
- Animated gradient text

## Tech Stack

- React 19 with TypeScript
- SCSS for styling
- CSS Grid & Flexbox
- Fetch API for data
- react-parallax-tilt for animations

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Open browser**
   - Go to `http://localhost:3000`

## Building Steps

### Step 1: Project Setup
- Created React TypeScript app
- Added SCSS support
- Set up folder structure and basic types

### Step 2: Data Fetching
- Created Team and Member interfaces
- Added API data fetching with useState/useEffect
- Implemented loading states

### Step 3: Layout Components
- Built Sidebar and Header components
- Created responsive dashboard layout
- Added navigation structure

### Step 4: Team List & Search
- Created TeamList component
- Added search functionality with filtering
- Implemented team cards display

### Step 5: Team Details
- Built TeamDetails view
- Added member cards with avatars
- Implemented navigation between views

### Step 6: Edit Functionality
- Created Modal component
- Added forms for editing teams and members
- Implemented add/edit/save operations

### Step 7: Mobile & Polish
- Made fully responsive for mobile
- Added mobile navigation menu
- Improved animations and styling

### Step 8: 3D Card Effects (I have learned this for this project)
- Added react-parallax-tilt library
- Implemented 3D hover effects on team cards
- Added glare and scale animations

### Step 9: Gradient Animations (I have learned this for this project)
- Created animated rainbow gradient headers
- Added gradient text effects to team titles
- Implemented smooth color transitions

## Project Structure

```
src/
├── components/      # UI components
├── types/          # TypeScript interfaces
└── App.tsx        # Main app
```

## Scripts

- `npm start` - Development server
- `npm run build` - Production build

## Future Improvements

- Real backend integration
- User authentication
- Team photos and avatars
- Drag & drop functionality
- Data export features
- Dark mode theme