import React from 'react';
import MediaKit from './MediaKit';

/**
 * Demo component showing how to use the MediaKit component
 * This is just an example implementation
 */
function Demo() {
  return (
    <div>
      <h1 className="p-6 text-center text-3xl font-bold">Elastos Media Kit Integration Demo</h1>
      
      {/* Basic usage */}
      <MediaKit />
      
      {/* Advanced usage with props - uncomment to test
      <MediaKit 
        showHeader={false} 
        showFooter={true} 
        className="my-custom-class"
      />
      */}
    </div>
  );
}

export default Demo;