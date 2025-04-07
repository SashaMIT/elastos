# Elastos Announcements Page

This package contains all the essential files required to recreate the Elastos Announcements page in another React application.

## Contents

1. `announcements.tsx` - The main React component for the Announcements page
2. `routes.js` - Server-side routes for fetching news and blog data

## Dependencies

### Frontend Dependencies:
- React
- TanStack React Query
- Framer Motion
- Lucide React (for icons)
- Wouter (for routing)
- Tailwind CSS
- Shadcn UI components (specifically the Carousel component)

### Backend Dependencies:
- Express.js
- RSS Parser

## Setup Instructions

### Step 1: Set Up a New React Project
If you don't already have a React project:
```bash
npx create-next-app my-elastos-site
# or
npx create-react-app my-elastos-site
```

### Step 2: Install Required Dependencies
```bash
# Frontend dependencies
npm install @tanstack/react-query framer-motion lucide-react wouter

# Backend dependencies
npm install express rss-parser
```

### Step 3: Set Up UI Components
If using Shadcn UI:
```bash
# Install shadcn/ui
npx shadcn-ui@latest init
# Add carousel component
npx shadcn-ui@latest add carousel
```

### Step 4: Copy Files to Your Project
1. Copy `announcements.tsx` to your pages directory
2. Copy `routes.js` to your server directory
3. Update the import paths in `announcements.tsx` to match your project structure

### Step 5: Implement the Backend Routes
In your Express server file:
```javascript
const express = require('express');
const registerAnnouncementsRoutes = require('./routes');

const app = express();

// Register the announcements routes
registerAnnouncementsRoutes(app);

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Step 6: Add the Page to Your Router
Add the Announcements page to your router:
```jsx
// For wouter
import { Route, Switch } from 'wouter';
import AnnouncementsPage from './pages/announcements';

function App() {
  return (
    <Switch>
      <Route path="/announcements" component={AnnouncementsPage} />
      {/* Other routes */}
    </Switch>
  );
}
```

## RSS Feed URLs

- Blog Posts: `https://rss.app/feeds/COQSFdAgMY8p4SOz.xml`
- News Items: `https://rss.app/feeds/tQGWZNuxHC69yKOm.xml`

## Customization

You can customize the appearance by:

1. Changing the colors in the component (look for color values like `#F7921A` and `#8BABFF`)
2. Modifying the responsive breakpoints in the grid layouts
3. Updating the RSS feed URLs in the backend routes

## Branding Colors

Elastos uses the following main colors:
- Primary Orange: `#F7921A`
- Blue Accent: `#8BABFF`
- Dark Background: `#141414`