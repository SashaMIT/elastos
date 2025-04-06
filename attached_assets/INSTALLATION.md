# Installing the Elastos Media Kit Component

This guide provides step-by-step instructions for integrating the Elastos Media Kit component into any React project.

## Prerequisites

- A React project (created with Create React App, Vite, Next.js, etc.)
- Node.js and npm/yarn installed

## Installation Steps

### 1. Copy the Component Files

First, copy the entire `elastos-media-kit-extractable` directory into your project:

```bash
# From the root of your project
cp -r /path/to/elastos-media-kit-extractable ./src/components/
```

### 2. Install Dependencies

Install the required dependencies:

```bash
# Using npm
npm install framer-motion lucide-react jszip

# Or using yarn
yarn add framer-motion lucide-react jszip
```

### 3. Set Up Asset Directory

Create a directory for the Elastos brand assets in your public folder:

```bash
mkdir -p public/logo-assets
```

### 4. Copy Brand Assets

Copy the Elastos brand assets into the directory:

```bash
# From the root of your project
cp /path/to/elastos-assets/* ./public/logo-assets/
```

Make sure you have the following files in your `public/logo-assets/` directory:

- `Elastos Logo Dark - 2.png`
- `Elastos Icon - 1.png`
- `Elastos Essentials Logo in Dark #2.png`
- `Elastos - colors 2.jpg`
- `Elastos colors 3.jpg`
- `Elastos -colors.jpg`
- `PPTelegraf-Regular.otf`
- `PPTelegraf-UltraLight.otf`
- `ELASTOS ESSENTIALS #1.jpg`
- `ELASTOS ESSENTIALS 7 tablet #1.jpg`
- `ELASTOS ESSENTIALS 10 tablet #1.jpg`
- `Elastos-Logo-Icon-ALL-2025.zip`
- `Elastos-Essentials-Logo-Kit.zip`
- `Brand-Guidelines-Elastos.zip`

### 5. Import and Use the Component

Now you can import and use the MediaKit component in your application:

```jsx
// src/App.js or any other component
import React from 'react';
import MediaKit from './components/elastos-media-kit-extractable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Application</h1>
      </header>
      
      {/* Add the MediaKit component */}
      <MediaKit />
    </div>
  );
}

export default App;
```

### 6. Customizing the Component

You can customize the MediaKit component by passing props:

```jsx
<MediaKit 
  showHeader={false} 
  showFooter={true} 
  className="custom-container"
/>
```

### 7. Using Individual Components

If you prefer more granular control, you can import and use individual components:

```jsx
import React from 'react';
import { LogoCard, ColorPaletteCard, logos, colorPalettes } from './components/elastos-media-kit-extractable';

function BrandingSection() {
  return (
    <div className="branding-section">
      <h2>Elastos Brand Assets</h2>
      
      <div className="logos-container">
        {logos.map(logo => (
          <LogoCard key={logo.id} logo={logo} />
        ))}
      </div>
      
      <div className="colors-container">
        {colorPalettes.map(palette => (
          <ColorPaletteCard key={palette.id} palette={palette} />
        ))}
      </div>
    </div>
  );
}

export default BrandingSection;
```

## Troubleshooting

- If you encounter styling issues, make sure you have Tailwind CSS or similar CSS framework set up in your project, or include the required CSS classes.
- If asset downloads fail, check that the asset files are correctly placed in the public directory and accessible via the specified paths.
- For other issues, refer to the README.md file or open an issue on the project repository.

## Next Steps

- Customize the data in `media-kit-utils.js` to add or modify brand assets.
- Adjust the component styling to match your application's design system.
- Consider adding additional functionality specific to your project's needs.