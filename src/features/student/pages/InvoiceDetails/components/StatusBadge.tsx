import React from 'react';

interface StatusBadgeProps {
  status: string;
  type: 'invoice' | 'payment';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, type }) => {
  let colorClasses = '';
  
  if (type === 'invoice') {
    switch (status) {
      case 'Paid':
        colorClasses = 'bg-green-100 text-green-800';
        break;
      case 'Unpaid':
        colorClasses = 'bg-red-100 text-red-800';
        break;
      default:
        colorClasses = 'bg-gray-100 text-gray-800';
    }
  } else if (type === 'payment') {
    switch (status) {
      case 'Success':
        colorClasses = 'bg-green-100 text-green-800';
        break;
      case 'Failed':
        colorClasses = 'bg-red-100 text-red-800';
        break;
      case 'Pending':
        colorClasses = 'bg-yellow-100 text-yellow-800';
        break;
      default:
        colorClasses = 'bg-gray-100 text-gray-800';
    }
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses}`}>
      {status}
    </span>
  );
};

export default StatusBadge;