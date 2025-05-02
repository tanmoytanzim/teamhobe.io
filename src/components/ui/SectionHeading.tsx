import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{children}</h2>
      <div className="mt-4 mx-auto w-24 h-1 bg-blue-500 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;