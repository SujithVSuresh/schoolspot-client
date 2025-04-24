interface FeeItem {
  feeType: string;
  amount: number;
}

const FeeBreakdown = ({ breakdown }: { breakdown: FeeItem[] }) => {
  return (
    <div className="bg-white rounded-lg border p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Fee Breakdown
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Fee Type
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {breakdown?.length > 0
              ? breakdown.map((item: FeeItem) => (
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
                    <td className="py-3 px-4 text-gray-800">{item.feeType}</td>
                    <td className="py-3 px-4 text-right text-gray-800">
                      {item.amount}
                    </td>
                  </tr>
                ))
              : ""}

            <tr className="bg-gray-50">
              <td className="py-4 px-4 font-medium text-gray-800">Total</td>
              <td className="py-4 px-4 text-right font-medium text-gray-800">
                INR{" "}
                {breakdown?.reduce((acc, ele) => (acc = acc + ele.amount), 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeBreakdown;
