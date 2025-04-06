# Elastos Bridge Page Standalone Component

This standalone component provides an interactive guide for bridging Elastos (ELA) tokens between different chains. It can be easily integrated into any React project.

## Features

- Interactive step-by-step guide for bridging ELA tokens
- Support for both native chain bridging and ERC-20 bridging
- Detailed instructions with progress tracking
- Responsive design for all device sizes
- Built with React, TypeScript, and Tailwind CSS
- Includes all necessary images and assets

## Installation

1. Extract this ZIP file to your project
2. Install the required dependencies:

```bash
npm install framer-motion lucide-react clsx tailwind-merge class-variance-authority
```

If you don't already have Tailwind CSS set up:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure your Tailwind CSS by adding to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add your existing content paths
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add the Tailwind directives to your CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

### Option 1: Use as a Full Page

Import the `BridgePage` component directly:

```jsx
import BridgePage from './path/to/BridgePage';

function App() {
  return <BridgePage />;
}
```

### Option 2: Include as a Section

Embed the component within your existing page:

```jsx
import BridgePage from './path/to/BridgePage';

function YourPage() {
  return (
    <div>
      <h1>Your Page Title</h1>
      <BridgePage />
      <footer>Your Footer</footer>
    </div>
  );
}
```

## Included Assets

This package already includes all necessary assets in the public directory:

- `/apple-logo.svg` - Apple logo icon
- `/google-play.svg` - Google Play logo icon
- `/bridge-step1.jpg` through `/bridge-step5.jpg` - Screenshots for native bridging steps
- `/glide-bridge-steps/step1.png` through `/glide-bridge-steps/step7.png` - Screenshots for Shadow Token bridge
- `/chainge/chainge-interface.png` - Screenshot for Chainge Finance interface
- Elastos logo files and additional branding assets

## Customization

You can customize the following aspects of the bridge page:

1. Colors - The component uses `#F7921A` (orange) and `#8BABFF` (blue) as primary colors
2. Content - Edit the text and descriptions in the BridgePage.tsx file
3. Steps - Update the step instructions and tips to match your specific requirements
4. Images - Replace the step images with your own screenshots


## Support

For questions or issues:
- Discord: https://discord.gg/dqB88b4H5K
- Telegram: https://t.me/elastosbridgesupport

## Credits

This Bridge page was developed for the Elastos cryptocurrency ecosystem.