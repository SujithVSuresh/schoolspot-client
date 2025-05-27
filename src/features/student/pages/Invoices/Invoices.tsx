import { useEffect, useState } from 'react';
import { 
  // Search, 
  // ChevronDown, 
  CheckCircle,
  Clock,
  AlertCircle,
  // Filter
} from 'lucide-react';
import { fetchInvoicesByStudentId } from '../../api/api';
import { dateFormatter, formatCurrency } from '../../../../app/utils/formatter';
import { useNavigate } from 'react-router-dom';

type Status = 'Paid' | 'Unpaid' | 'overdue';

interface InvoiceType {
  _id: string;
  student: string;
  title: string;
  invoiceNumber: string;
  dueDate: Date;
  feeBreakdown?: {
    feeType: string;
    amount: number;
  }[];
  status: 'Unpaid' | 'Paid';
  totalAmount: number;
  remarks?: string;
  createdAt: Date;
  updatedAt: Date;
}

const Invoices = () => {
  const navigate = useNavigate()
    // const [searchTerm, setSearchTerm] = useState('');
    const [invoices, setInvoices] = useState<InvoiceType[]>([]);

    useEffect(() => {
      handleInvoiceFetch()

    }, [])

    const handleInvoiceFetch = async () => {
      const invoices = await fetchInvoicesByStudentId()
      if(invoices.success){
        console.log(invoices.data, "this is the invoices")
        setInvoices(invoices.data)
      }
    }

  
    const getStatusColor = (status: Status) => {
      switch (status) {
        case 'Paid':
          return 'text-green-700 bg-green-50';
        case 'Unpaid':
          return 'text-yellow-700 bg-yellow-50';
        case 'overdue':
          return 'text-red-700 bg-red-50';
      }
    };
  
    const getStatusIcon = (status: Status) => {
      switch (status) {
        case 'Paid':
          return <CheckCircle className="w-4 h-4" />;
        case 'Unpaid':
          return <Clock className="w-4 h-4" />;
        case 'overdue':
          return <AlertCircle className="w-4 h-4" />;
      }
    };


  return (
    <div className="min-h-screen w-full">


      <div>
        <div className="rounded-xl mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end space-y-4 sm:space-y-0">
  
            {/* <div className="flex items-center space-x-4 mr-2">
              <div className="relative">
                <Filter className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <select
                  // value={statusFilter}
                  // onChange={(e) => setStatusFilter(e.target.value as Status | 'all')}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div> */}
            {/* <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-80 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div> */}
          </div>
        </div>

        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 h-12">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Issued</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <tr key={invoice._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{invoice.invoiceNumber}</div>
                        <div className="text-sm text-gray-500">{invoice.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dateFormatter(String(invoice.createdAt))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dateFormatter(String(invoice.dueDate))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatCurrency(invoice.totalAmount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                        {getStatusIcon(invoice.status)}
                        <span className="ml-1 capitalize">{invoice.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* <div className="flex justify-end space-x-3">
                        <button className="text-gray-400 hover:text-gray-500">
                          <Download className="w-5 h-5" />
                        </button>
                        <button className="text-indigo-600 hover:text-indigo-700">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div> */}
                      {/* onClick={() => handlePayment(invoice.invoiceNumber, invoice.totalAmount)}  */}
                      <button onClick={() => navigate(`/student/invoices/${invoice._id}`)} className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {invoices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No invoices found.</p>
            </div>
          )}
        </div>

      </div>


    </div>
  )
}

export default Invoices
