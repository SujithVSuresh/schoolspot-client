import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    const navigate = useNavigate()
  return (
    <nav className="flex items-center space-x-2 mb-5 text-gray-600">


      {items.map((item, index) => (
        <React.Fragment key={index}>
            {index > 0 && <ChevronRight size={16} className="text-gray-400" /> }
        
          <a
          onClick={() => navigate(item.href)}
            className={`hover:text-blue-600 hover:cursor-pointer transition-colors ${
              index === items.length - 1
                ? 'text-gray-900 font-medium'
                : ''
            }`}
          >
            {item.label}
          </a>
          
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;