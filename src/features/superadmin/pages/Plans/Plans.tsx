import Card from "./components/Card"
import { fetchAllPlans } from "../../api/api"
import { useEffect, useState } from "react"
import { PlanType } from "../../types/types"
import { useNavigate } from "react-router-dom"


const Plans = () => {
  const navigate = useNavigate()

  const [plans, setPlans] = useState<PlanType[]>([])


  useEffect(() => {
    const fetchPlansHandler = async () => {
      const response = await fetchAllPlans()

      if(response.success){
        setPlans(response.data)
      }
    }

    fetchPlansHandler()
  }, [])
  return (
    <div className="p-5">
<div className="w-full">
  <div className="flex items-center justify-between">

      <h1 className="text-2xl font-bold text-gray-800">Plans</h1>

    <div className="flex-none">
      <button onClick={() => navigate('/superadmin/plans/add')} className="px-4 py-2 bg-blue-600 text-white rounded-sm shadow hover:bg-blue-700 transition duration-200">
        Add Plan
      </button>
    </div>
  </div>
</div>
      
      <div className="pt-5 grid grid-cols-3 gap-3">
        {
          plans.map((plan) => (
            <Card plan={plan}/>
          ))
        }
      </div>
   
    </div>
  )
}

export default Plans
