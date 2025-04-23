// import { InvoiceType, PaymentType } from '../../types/types';
import InvoiceHeader from './components/InvoiceHeader';
import { ArrowLeft } from 'lucide-react';
import FeeBreakdown from './components/FeeBreakdown';
import PaymentHistory from './components/PaymentHistory';

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
          
          <div className="lg:col-span-1">
  <div className="bg-white rounded-lg border p-6">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">Invoice Timeline</h2>
    <div className="space-y-4">
      {/* Static Invoice Created */}
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-0.5 h-full bg-gray-200"></div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Invoice Created</p>
          <p className="text-xs text-gray-500">March 1, 2025, 10:30 AM</p>
        </div>
      </div>

      {/* Static Payment 1 */}
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-0.5 h-full bg-gray-200"></div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Payment Success</p>
          <p className="text-xs text-gray-600">₹1,000.00 via Credit Card</p>
          <p className="text-xs text-gray-500">March 3, 2025, 11:45 AM</p>
        </div>
      </div>

      {/* Static Payment 2 */}
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-0.5 h-full bg-gray-200"></div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Payment Failed</p>
          <p className="text-xs text-gray-600">₹500.00 via UPI</p>
          <p className="text-xs text-gray-500">March 5, 2025, 02:15 PM</p>
        </div>
      </div>

      {/* Static Due Date */}
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Payment Due</p>
          <p className="text-xs text-gray-500">April 1, 2025</p>
        </div>
      </div>
    </div>
  </div>
</div>


        </div> 

      </div>
    </div>
  );
};

export default InvoiceDetailsPage;