import React, { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsiblePanelProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const CollapsiblePanel: React.FC<CollapsiblePanelProps> = ({
  title,
  children,
  icon,
  isOpen,
  onToggle
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className={`w-full flex items-center justify-between p-4 text-left ${
          isOpen ? 'bg-gray-100' : 'bg-white'
        }`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          {icon && <span className="mr-3">{icon}</span>}
          <span className="font-medium text-lg">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsiblePanel;