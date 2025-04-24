import InvoiceHeader from "./components/InvoiceHeader";
import { ArrowLeft } from "lucide-react";
import FeeBreakdown from "./components/FeeBreakdown";
import PaymentHistory from "./components/PaymentHistory";
import { fetchInvoiceById, fetchPaymentsByInvoiceId } from "../../api/api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FeeItem, InvoiceDetailsType } from "../../types/types";
import { createPaymentRequest } from "../../api/api";
import { PaymentType } from "../../types/types";
import { dateFormatter, timeFormatter } from "../../../../app/utils/formatter";


const InvoiceDetailsPage: React.FC = () => {
  const location = useLocation();
  const invoiceId = location.pathname.split("/")[3];

  const [invoice, setInvoice] = useState<InvoiceDetailsType | null>(null);
  const [paymentHistory, setPaymentHistory] = useState<PaymentType[]>([]);

  useEffect(() => {
    const fetchInvoiceHandler = async (invoiceId: string) => {
      const response = await fetchInvoiceById(invoiceId);
      if (response.success) {
        console.log(response);
        setInvoice(response.data);
      }
    };

    fetchInvoiceHandler(invoiceId);

    const fetchPaymentHistoryHandler = async (invoiceId: string) => {
      const response = await fetchPaymentsByInvoiceId(invoiceId);
      if (response.success) {
        setPaymentHistory(response.data);
      }
    };

    fetchPaymentHistoryHandler(invoiceId);
  }, [invoiceId]);

  const handlePayment = async (invoiceId: string, amount: number) => {
    const response = await createPaymentRequest(invoiceId, amount)
    if(response.success){
      window.location.href = response.data.url
    }
  }

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to Invoices</span>
          </button>
        </div>

        <InvoiceHeader invoice={invoice as InvoiceDetailsType} paymentHandler={handlePayment}/>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FeeBreakdown breakdown={invoice?.feeBreakdown as FeeItem[]}/>
            <PaymentHistory paymentHistory={paymentHistory}/>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Invoice Timeline
              </h2>
              <div className="space-y-4">
                {/* Static Invoice Created */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-3 h-4 bg-blue-500 rounded-full"></div>
                    <div className="w-0.5 h-full bg-gray-200"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Invoice Created
                    </p>
                    <p className="text-xs text-gray-500">
                      {dateFormatter(String(invoice?.createdAt))}, {timeFormatter(String(invoice?.createdAt))}
                    </p>
                  </div>
                </div>

                {/* Static Payment 1 */}
                {paymentHistory.length > 0 && paymentHistory.map((payment, index) => (
                              <div className="flex">
                              <div className="flex flex-col items-center mr-4">
                                <div className={`w-3 h-4 ${payment.status == "Success" ? "bg-green-500" : "bg-red-500"} rounded-full`}></div>
                                <div className={`w-0.5 h-full ${paymentHistory.length > index + 1 && "bg-gray-200"}`}></div>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-800">
                                  Payment {payment.status}
                                </p>
                                <p className="text-xs text-gray-600">
                                  ₹{payment.amountPaid} via {payment.paymentMethod}
                                </p>
                                <p className="text-xs text-gray-500">
                                {dateFormatter(String(payment?.createdAt))}, {timeFormatter(String(payment?.createdAt))}
                                </p>
                              </div>
                            </div>

                ))}

                {/* Static Due Date */}
                {/* <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Payment Due
                    </p>
                    <p className="text-xs text-gray-500">April 1, 2025</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailsPage;
