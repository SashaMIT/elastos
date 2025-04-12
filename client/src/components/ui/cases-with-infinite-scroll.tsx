import React from 'react';

interface CaseProps {
  // Add any props you need here
}

export const Case: React.FC<CaseProps> = () => {
  return (
    <div className="p-4">
      <h2>Case Component</h2>
      <p>This is a placeholder for the cases with infinite scroll component.</p>
    </div>
  );
}; 