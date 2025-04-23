import React from 'react';

import { CalendarDays, School, GraduationCap, FileText } from 'lucide-react';

const InvoiceHeader: React.FC = () => {
  const isOverdue = true;

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg border p-6 mb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Tuition Fee - April 2025</h1>
          <div className="flex items-center mt-2">
            <FileText size={16} className="text-gray-500 mr-2" />
            <span className="text-gray-600 mr-4">Invoice #INV-1001</span>
            {/* <StatusBadge status="Unpaid" type="invoice" /> */}
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 text-sm transition-colors duration-200 flex items-center">
            <span>Print</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition-colors duration-200 flex items-center">
            <span>Make Payment</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-b border-gray-200 pb-6">
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-medium mb-1">Student</h3>
          <p className="text-gray-800 font-medium">John Doe</p>
          <p className="text-gray-600 text-sm">john.doe@example.com</p>
          <p className="text-gray-600 text-sm">+1 234 567 8901</p>
        </div>

        <div>
          <h3 className="text-xs uppercase text-gray-500 font-medium mb-1 flex items-center">
            <School size={14} className="mr-1" /> School
          </h3>
          <p className="text-gray-800 font-medium">Sunrise High School</p>
          <p className="text-gray-600 text-sm">123 School St, Cityville</p>
        </div>

        <div>
          <h3 className="text-xs uppercase text-gray-500 font-medium mb-1 flex items-center">
            <GraduationCap size={14} className="mr-1" /> Class
          </h3>
          <p className="text-gray-800 font-medium">Science Batch A</p>
          <p className="text-gray-600 text-sm">Grade 10, Section B</p>
        </div>

        <div>
          <h3 className="text-xs uppercase text-gray-500 font-medium mb-1 flex items-center">
            <CalendarDays size={14} className="mr-1" /> Due Date
          </h3>
          <p className={`font-medium ${isOverdue ? 'text-red-600' : 'text-gray-800'}`}>
            {formatDate(new Date('2025-04-10'))}
          </p>
          {isOverdue && <p className="text-red-500 text-sm font-medium">Overdue</p>}
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-xs uppercase text-gray-500 font-medium mb-1">Remarks</h3>
        <p className="text-gray-700">Please make the payment before the end of this month to avoid penalties.</p>
      </div>
    </div>
  );
};

export default InvoiceHeader;
