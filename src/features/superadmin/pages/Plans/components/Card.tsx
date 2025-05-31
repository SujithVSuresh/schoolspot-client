import { PlanType } from "../../../types/types"
import { useNavigate } from "react-router-dom"

const Card = ({plan}: {plan: PlanType}) => {
  const navigate = useNavigate()
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 flex items-center justify-between">
      <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h2>
      <div className="space-y-1 text-gray-600 text-sm">
        <p><span className="font-medium">Duration:</span> {plan.durationInDays} days</p>
        <p><span className="font-medium">Price:</span> ₹{plan.price}</p>
      </div>
      </div>
      <div>
        <span onClick={() => navigate(`/superadmin/plans/edit/${plan._id}`)} className="underline text-sm text-blue-600 hover:cursor-pointer">Edit</span>
      </div>
    </div>
  )
}

export default Card
