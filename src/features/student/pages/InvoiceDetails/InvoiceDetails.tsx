// import { InvoiceType, PaymentType } from '../../types/types';
import InvoiceHeader from './components/InvoiceHeader';
import { ArrowLeft } from 'lucide-react';
import FeeBreakdown from './components/FeeBreakdown';


const InvoiceDetailsPage: React.FC = () => {

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to Invoices</span>
          </button>
        </div>
        
        <InvoiceHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FeeBreakdown />
            <PaymentHistory 

            />
          </div>
          
          {/* <div className="lg:col-span-1">
            <InvoiceActions 
              invoice={invoice} 
              payments={payments} 
            />
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Invoice Timeline</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-0.5 h-full bg-gray-200"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Invoice Created</p>
                    <p className="text-xs text-gray-500">
                      {new Date(invoice.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
                
                {payments.map((payment, index) => (
                  <div className="flex" key={payment._id}>
                    <div className="flex flex-col items-center mr-4">
                      <div className={`w-3 h-3 rounded-full ${
                        payment.status === 'Success' ? 'bg-green-500' : 
                        payment.status === 'Failed' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}></div>
                      {index < payments.length - 1 && <div className="w-0.5 h-full bg-gray-200"></div>}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Payment {payment.status}
                      </p>
                      <p className="text-xs text-gray-600">
                        {new Intl.NumberFormat('en-IN', {
                          style: 'currency',
                          currency: 'INR'
                        }).format(payment.amountPaid)} via {payment.paymentMethod}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(payment.paymentDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {invoice.dueDate > new Date() && (
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Payment Due</p>
                      <p className="text-xs text-gray-500">
                        {new Date(invoice.dueDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div> */}
        </div> 

      </div>
    </div>
  );
};

export default InvoiceDetailsPage;