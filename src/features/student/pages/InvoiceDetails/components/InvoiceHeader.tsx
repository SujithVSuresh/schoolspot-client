import { CalendarDays, School, GraduationCap, FileText } from 'lucide-react';
import { InvoiceDetailsType } from '../../../types/types';
import StatusBadge from './StatusBadge';

const InvoiceHeader = ({invoice, paymentHandler}: {
  invoice: InvoiceDetailsType,
  paymentHandler: (invoiceId: string, amount: number) => void
}) => {
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
          <h1 className="text-xl font-semibold text-gray-800">{invoice?.title} - April 2025</h1>
          <div className="flex items-center mt-2">
            <FileText size={16} className="text-gray-500 mr-2" />
            <span className="text-gray-600 mr-4">Invoice #INV-1001</span>
            <StatusBadge status={invoice?.status} type="invoice" />
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button onClick={() => paymentHandler(invoice.invoiceNumber, invoice.totalAmount)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition-colors duration-200 flex items-center">
            <span>Make Payment</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-b border-gray-200 pb-6">
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-medium mb-1">Student</h3>
          <p className="text-gray-800 font-medium">{invoice?.student.fullName}</p>
          <p className="text-gray-600 text-sm">{invoice?.student.email}</p>
          <p className="text-gray-600 text-sm">{invoice?.student.contactNumber}</p>
        </div>

        <div>
          <h3 className="text-xs uppercase text-gray-500 font-medium mb-1 flex items-center">
            <School size={14} className="mr-1" /> School
          </h3>
          <p className="text-gray-800 font-medium">{invoice?.school.schoolName}</p>
          <p className="text-gray-600 text-sm">{invoice?.school.address.city}, {invoice?.school.address.state}</p>
        </div>

        <div>
          <h3 className="text-xs uppercase text-gray-500 font-medium mb-1 flex items-center">
            <GraduationCap size={14} className="mr-1" /> Class
          </h3>
          <p className="text-gray-800 font-medium">Grade {invoice?.class.name}</p>
          <p className="text-gray-600 text-sm">Section {invoice?.class.section}</p>
        </div>

        <div>
          <h3 className="text-xs uppercase text-gray-500 font-medium mb-1 flex items-center">
            <CalendarDays size={14} className="mr-1" /> Due Date
          </h3>
          <p className={`font-medium ${isOverdue ? 'text-red-600' : 'text-gray-800'}`}>
            {formatDate(invoice?.dueDate)}
          </p>
          {isOverdue && <p className="text-red-500 text-sm font-medium">Overdue</p>}
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-xs uppercase text-gray-500 font-medium mb-1">Remarks</h3>
        <p className="text-gray-700">{invoice?.remarks}</p>
      </div>
    </div>
  );
};

export default InvoiceHeader;
