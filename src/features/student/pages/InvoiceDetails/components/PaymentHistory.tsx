import { CreditCard, Calendar, ChevronsUp } from 'lucide-react';
import { PaymentType } from '../../../types/types';
import StatusBadge from './StatusBadge';
import { dateFormatter } from '../../../../../app/utils/formatter';

const PaymentHistory = ({paymentHistory}: {paymentHistory: PaymentType[]}) => {

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'Card':
        return <CreditCard size={16} className="text-gray-500" />;
      default:
        return <ChevronsUp size={16} className="text-gray-500" />;
    }
  };


  return (
    <div className="bg-white rounded-lg border p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment History</h2>



      {paymentHistory.length > 0 ? (
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
              {paymentHistory.map((payment) => (
                <tr
                  key={payment._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="py-3 px-4 text-gray-800">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-gray-500 mr-2" />
                      {dateFormatter(String(payment?.paymentDate))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-800">
                    <div className="flex items-center">
                      {getPaymentMethodIcon(payment.paymentMethod)}
                      <span className="ml-2">{payment.paymentMethod}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-800">{payment.transactionId?.slice(0, 20)}</td>
                  <td className="py-3 px-4 text-right text-gray-800">
                  ₹ {(payment.amountPaid)}
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

      {/* {remainingAmount > 0 && (
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition-colors duration-200">
            Make Payment
          </button>
        </div>
      )} */}
    </div>
  );
};

export default PaymentHistory;
