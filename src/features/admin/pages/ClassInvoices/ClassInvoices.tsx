import { CheckCircle, Clock, AlertCircle, Plus } from "lucide-react";
import { dateFormatter, formatCurrency } from "../../../../app/utils/formatter";
import { useState, useEffect } from "react";
import { fetchInvoicesByClass, deleteInvoice } from "../../api/api";
import { useNavigate, useOutletContext } from "react-router-dom";

type Status = "Paid" | "Unpaid" | "overdue";

interface InvoiceType {
  _id: string;
  title: string;
  student: {
    fullName: string;
    userId: string;
  };
  class: string;
  invoiceNumber: string;
  dueDate: Date;
  status: "Unpaid" | "Paid";
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

const ClassInvoices = () => {
  const navigate = useNavigate();
     const { classId }: { classId: string } = useOutletContext();
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);

  useEffect(() => {
    const fetchInvoicesHandler = async (classId: string) => {
      const response = await fetchInvoicesByClass(classId);

      if (response.success) {
        setInvoices(response.data);
      }
    };

    fetchInvoicesHandler(classId);
  }, [classId]);

  const getStatusColor = (status: Status) => {
    switch (status) {
      case "Paid":
        return "text-green-700 bg-green-50";
      case "Unpaid":
        return "text-yellow-700 bg-yellow-50";
      case "overdue":
        return "text-red-700 bg-red-50";
    }
  };

  const getStatusIcon = (status: Status) => {
    switch (status) {
      case "Paid":
        return <CheckCircle className="w-4 h-4" />;
      case "Unpaid":
        return <Clock className="w-4 h-4" />;
      case "overdue":
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const deleteInvoiceHandler = async (invoiceId: string) => {
    const response = await deleteInvoice(invoiceId);
    if (response.success) {
      console.log(response, "inv");
      const data = invoices.filter(
        (invoice) => invoice._id !== response.data._id
      );
      setInvoices(data);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Invoices
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button
            onClick={() =>
              navigate(`/dashboard/classes/${classId}/invoice/new`)
            }
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            <Plus className="h-5 w-5" />
            Create Invoice
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 h-12">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Issued
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={2} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {invoice.invoiceNumber}
                      </div>
                      <div className="text-sm text-gray-500">
                        {invoice.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.student.fullName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dateFormatter(String(invoice.createdAt))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dateFormatter(String(invoice.updatedAt))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatCurrency(500)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        "Paid"
                      )}`}
                    >
                      {getStatusIcon(invoice.status)}
                      <span className="ml-1 capitalize">{invoice.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {invoice.status == "Unpaid" && (
                      <button
                        onClick={() => deleteInvoiceHandler(invoice._id)}
                        className="bg-gray-500 text-white text-sm px-3 py-1 rounded hover:bg-gray-600"
                      >
                        Edit
                      </button>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {invoice.status == "Unpaid" && (
                      <button
                        onClick={() => deleteInvoiceHandler(invoice._id)}
                        className="bg-gray-500 text-white text-sm px-3 py-1 ml-5 rounded hover:bg-gray-600"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* {invoices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No invoices found matching your criteria</p>
              </div>
            )} */}
      </div>
    </>
  );
};

export default ClassInvoices;
