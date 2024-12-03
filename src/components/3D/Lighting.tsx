import React from 'react';

export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#4FD1C5" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#4FD1C5" />
    </>
  );
}