import React, { ReactNode } from 'react';

interface ScrollLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, className = '' }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById(to);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjusted for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default ScrollLink;