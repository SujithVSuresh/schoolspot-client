import React from 'react';
import { Invoice, Payment } from '../types/invoice';
import { Download, Printer, Share2, Send } from 'lucide-react';

interface InvoiceActionsProps {
  invoice: Invoice;
  payments: Payment[];
}

const InvoiceActions: React.FC<InvoiceActionsProps> = ({ invoice, payments }) => {
  const getTotalPaidAmount = () => {
    return payments
      .filter(payment => payment.status === 'Success')
      .reduce((sum, payment) => sum + payment.amountPaid, 0);
  };

  const isPaid = getTotalPaidAmount() >= invoice.totalAmount;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Actions</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <Printer size={24} className="text-gray-700 mb-2" />
          <span className="text-sm font-medium text-gray-800">Print</span>
        </button>
        
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <Download size={24} className="text-gray-700 mb-2" />
          <span className="text-sm font-medium text-gray-800">Download</span>
        </button>
        
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <Share2 size={24} className="text-gray-700 mb-2" />
          <span className="text-sm font-medium text-gray-800">Share</span>
        </button>
        
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <Send size={24} className="text-gray-700 mb-2" />
          <span className="text-sm font-medium text-gray-800">Email</span>
        </button>
      </div>
      
      {!isPaid && (
        <div className="mt-6">
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors duration-200">
            Make Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default InvoiceActions;