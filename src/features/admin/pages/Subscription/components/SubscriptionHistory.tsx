import { SubscriptionType } from '../../../types/types'
import { dateFormatter } from '../../../../../app/utils/formatter'

const SubscriptionHistory = ({subscriptions}: {subscriptions: SubscriptionType[]}) => {
  console.log(subscriptions, "vavaav")
  return (
    <div>
            <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 h-12">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PRICE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  START DATE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  END DATE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SUBSCRIBED AT
                </th>
     
               
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {subscriptions.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.planPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dateFormatter(item.startDate.toString())}
                   </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dateFormatter(item.endDate.toString())}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                   {item.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {dateFormatter(String(item.createdAt))}
                  </td>
         
  
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* {students.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No students found.
            </p>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default SubscriptionHistory
