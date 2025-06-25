import { CheckCircle, Clock, AlertCircle, Plus } from "lucide-react";
import { dateFormatter, formatCurrency } from "../../../../app/utils/formatter";
import { useState, useEffect } from "react";
import { fetchInvoicesByClass, deleteInvoice } from "../../api/api";
import { useOutletContext } from "react-router-dom";
import { useLoading } from "../../../../app/hooks/useLoading";
import CustomProgress from "../../../../app/components/Loader/CustomProgress";
import Spinner from "../../../../app/components/Loader/Spinner";
import NotFound from "../../../../app/components/NotFound";
import AddButton from "../../components/NavigateButton";

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
  const { classId }: { classId: string } = useOutletContext();
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);

  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchInvoicesHandler = async (classId: string) => {
      startLoading();
      const response = await fetchInvoicesByClass(classId);

      if (response.success) {
        setInvoices(response.data);
      }
      stopLoading();
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
      <CustomProgress isAnimating={isLoading} />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Invoices
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <AddButton
            icon={Plus}
            label="Create Invoice"
            navlink={`/dashboard/classes/${classId}/invoice/new`}
          />
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : invoices.length == 0 ? (
        <NotFound />
      ) : (
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 h-12">
                  <th className="px-6 py-3 text-left text-xs font-medium text-primaryText uppercase tracking-wider">
                    Invoice
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primaryText uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primaryText uppercase tracking-wider">
                    Date Issued
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primaryText uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primaryText uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primaryText uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-primaryText uppercase tracking-wider"></th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-primaryText uppercase tracking-wider"></th>
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
                          invoice.status
                        )}`}
                      >
                        {getStatusIcon(invoice.status)}
                        <span className="ml-1 capitalize">
                          {invoice.status}
                        </span>
                      </span>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {invoice.status == "Unpaid" && (
                      <button
                        onClick={() => {}}
                        className="bg-gray-500 text-white text-sm px-3 py-1 rounded hover:bg-gray-600"
                      >
                        Edit
                      </button>
                    )}
                  </td> */}

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
        </div>
      )}
    </>
  );
};

export default ClassInvoices;
