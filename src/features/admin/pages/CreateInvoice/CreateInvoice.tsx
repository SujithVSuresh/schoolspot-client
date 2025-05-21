import { PlusCircle, MinusCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { FeeData, FeeItem } from "../../types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoiceSchema } from "../../validation/formValidation";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { createInvoice } from "../../api/api";
import StudentList from "./components/StudentList";

const CreateInvoice = () => {
    const {classId} = useParams()
  const navigate = useNavigate();

  const [feeBreakdown, setFeeBreakdown] = useState<FeeItem[]>([{
        feeType: "",
        amount: 0,
      }]);
  const [feeBreakdownError, setFeeBreakdownError] = useState<string>("");

  const [selectedStudents, setSelectedStudents] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FeeData>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      totalAmount: 0,
    },
  });

  const addFeeItem = () => {
    setFeeBreakdown((prev) => [
      ...prev,
      {
        feeType: "",
        amount: 0,
      },
    ]);
  };

  const removeFeeItem = (indexVal: number) => {
    const items = feeBreakdown.filter((_, index) => index !== indexVal);
    setFeeBreakdown(items);
  };

  const handleFeeItemChange = (index: number, field: "feeType" | "amount", value: string | number) => {
    const updatedFeeBreakdown = [...feeBreakdown];
    updatedFeeBreakdown[index] = {
      ...updatedFeeBreakdown[index],
      [field]: field === "amount" ? Number(value) : value,
    };
    setFeeBreakdown(updatedFeeBreakdown);
  };

  const calculateTotalAmount = () => {
    return feeBreakdown.reduce((acc, val) => acc + (val.amount || 0), 0);
  };

  useEffect(() => {
    const total = calculateTotalAmount();
    setValue("totalAmount", total);
  }, [feeBreakdown, setValue]);



  const onSubmit = async (data: FeeData) => {
    if(selectedStudents.length == 0){
      return
    }

    const feeBreakdownData = feeBreakdown.filter((fee) => fee.feeType.trim() !== "");

    if (feeBreakdownData.length === 0) {
      setFeeBreakdownError("At least one valid fee breakdown item is required");
      return;
    }

    setFeeBreakdownError(""); 

    const response = await createInvoice({
      ...data,
      class: classId,
      feeBreakdown: feeBreakdownData,
    }, selectedStudents);

    if (response.success) {
      toast.success("Invoice created successfully!", {
        duration: 2000,
        position: "bottom-right",
        style: {
          backgroundColor: "#E7FEE2",
          border: "2px solid #16A34A",
          minWidth: "400px",
          color: "black",
        },
      });
      navigate(`/dashboard/classes/profile/${classId}?section=fees`);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl border mt-28 p-12 max-w-xl mx-auto"
      >
        <div className="w-full text-center mb-5">
        <span className="font-semibold text-lg">Create Invoice</span>
        </div>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Fee Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              type="datetime-local"
              id="dueDate"
              {...register("dueDate")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg "
            />
            {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate.message}</p>}
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">Fee Breakdown</label>
              <button
                type="button"
                onClick={addFeeItem}
                className="text-blue-600 hover:text-blue-700 flex items-center text-sm"
              >
                <PlusCircle size={16} className="mr-1" />
                Add Fee
              </button>
            </div>

            {feeBreakdownError && <p className="text-red-500 text-sm mb-2">{feeBreakdownError}</p>}

            <div className="space-y-3">
              {feeBreakdown.map((fee, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={fee.feeType}
                      onChange={(e) => handleFeeItemChange(index, "feeType", e.target.value)}
                      placeholder="Fee Type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="number"
                      value={fee.amount}
                      onChange={(e) => handleFeeItemChange(index, "amount", e.target.value)}
                      placeholder="Amount"
                      min="0"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  {feeBreakdown.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFeeItem(index)}
                      className="text-red-600 hover:text-red-700 p-2"
                    >
                      <MinusCircle size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Amount
            </label>
            <input
              type="number"
              {...register("totalAmount")}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 mb-1">
              Remarks
            </label>
            <textarea
              id="remarks"
              {...register("remarks")}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 mb-1">
              Select Students
            </label>

            <StudentList selectedStudents={selectedStudents} setSelectedStudents={setSelectedStudents}/>
 
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 flex justify-center items-center font-medium transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {/* <Save size={18} className="mr-2" /> */}
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateInvoice;
