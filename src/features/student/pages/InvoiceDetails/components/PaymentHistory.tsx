import React from 'react';
import { CreditCard, Calendar, ChevronsUp } from 'lucide-react';


const PaymentHistory: React.FC<PaymentHistoryProps> = () => {


  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment History</h2>
      
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <div className="mb-2 md:mb-0">
            <span className="text-sm text-gray-500">Payment Progress</span>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-gray-800">{formatCurrency(totalPaid)}</span>
              <span className="text-gray-500">of {formatCurrency(totalAmount)}</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-600">{paymentPercentage}% Paid</span>
            {remainingAmount > 0 && (
              <div className="text-sm text-red-600">{formatCurrency(remainingAmount)} remaining</div>
            )}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${paymentPercentage}%` }}
          ></div>
        </div>
      </div>
      
      {payments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Method</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-3 px-4 text-gray-800">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-gray-500 mr-2" />
                      {formatDate(payment.paymentDate)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-800">
                    <div className="flex items-center">
                      {getPaymentMethodIcon(payment.paymentMethod)}
                      <span className="ml-2">{payment.paymentMethod}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-800">
                    {payment.transactionId ? payment.transactionId : '-'}
                  </td>
                  <td className="py-3 px-4 text-right text-gray-800">
                    {formatCurrency(payment.amountPaid)}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <StatusBadge status={payment.status} type="payment" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-6 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No payment records found</p>
        </div>
      )}
      
      {remainingAmount > 0 && (
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition-colors duration-200">
            Make Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;