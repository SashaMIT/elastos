# Elastos Media Kit Component

A reusable React component that showcases Elastos brand assets, colors, typography, and application previews. This component is designed to be easily integrated into any React application.

## Features

- Logo showcase with download options
- Color palette display
- Typography samples with font downloads
- Application previews
- Responsive design with smooth animations
- Dark theme by default

## Installation

1. Copy the `elastos-media-kit-extractable` directory into your React project
2. Install the required dependencies:

```bash
npm install framer-motion lucide-react jszip
```

3. Create a `/public/logo-assets/` directory in your project and place the Elastos brand assets there

## Usage

```jsx
import React from 'react';
import MediaKit from './path/to/elastos-media-kit-extractable/MediaKit';

function App() {
  return (
    <div>
      <h1>My Application</h1>
      
      {/* Add the MediaKit component with default options */}
      <MediaKit />
      
      {/* Or customize it */}
      <MediaKit 
        showHeader={false} 
        showFooter={true} 
        className="my-custom-class"
      />
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showHeader` | boolean | `true` | Whether to show the Media Kit header |
| `showFooter` | boolean | `true` | Whether to show the Media Kit footer |
| `className` | string | `""` | Additional CSS classes to apply to the root element |

## Asset Directory Structure

Make sure your project has the following directory structure for assets:

```
/public
  /logo-assets
    - Elastos Logo Dark - 2.png
    - Elastos Icon - 1.png
    - Elastos Essentials Logo in Dark #2.png
    - Elastos - colors 2.jpg
    - Elastos colors 3.jpg
    - Elastos -colors.jpg
    - PPTelegraf-Regular.otf
    - PPTelegraf-UltraLight.otf
    - ELASTOS ESSENTIALS #1.jpg
    - ELASTOS ESSENTIALS 7 tablet #1.jpg
    - ELASTOS ESSENTIALS 10 tablet #1.jpg
    - Elastos-Logo-Icon-ALL-2025.zip
    - Elastos-Essentials-Logo-Kit.zip
    - Brand-Guidelines-Elastos.zip
```

## Customization

You can customize the assets displayed by modifying the data files in `elastos-media-kit-extractable/lib/media-kit-utils.js`.

## License

This component is provided as part of the Elastos brand assets and is subject to Elastos branding guidelines.