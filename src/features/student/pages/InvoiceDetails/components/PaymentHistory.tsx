import React from 'react';
import { CreditCard, Calendar, ChevronsUp } from 'lucide-react';

const PaymentHistory: React.FC = () => {
  const totalPaid = 1500;
  const totalAmount = 2000;
  const remainingAmount = totalAmount - totalPaid;
  const paymentPercentage = ((totalPaid / totalAmount) * 100).toFixed(0);

  const formatCurrency = (amount: number) =>
    `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'Credit Card':
        return <CreditCard size={16} className="text-gray-500" />;
      default:
        return <ChevronsUp size={16} className="text-gray-500" />;
    }
  };

  const payments = [
    {
      _id: '1',
      paymentDate: '2025-03-10',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN123456789',
      amountPaid: 1000,
      status: 'Completed',
    },
    {
      _id: '2',
      paymentDate: '2025-04-05',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN987654321',
      amountPaid: 500,
      status: 'Completed',
    },
  ];

  return (
    <div className="bg-white rounded-lg border p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment History</h2>



      {payments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                >
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
                  <td className="py-3 px-4 text-gray-800">{payment.transactionId}</td>
                  <td className="py-3 px-4 text-right text-gray-800">
                    {formatCurrency(payment.amountPaid)}
                  </td>
                  <td className="py-3 px-4 text-right">
                    {/* <StatusBadge status={payment.status} type="payment" /> */}
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
