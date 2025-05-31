import { createPlan, editPlan, fetchPlanById } from "../../api/api"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditPlan = () => {
  const navigate = useNavigate()
  const {planId} = useParams()

  console.log(planId)

  const [name, setName] = useState<string>("")
  const [duration, setDuration] = useState<number | null>(null)
  const [price, setPrice] = useState<number | null>(null)


  useEffect(() => {
    const fetchPlanByIdHandler = async (planId: string) => {
      const response = await fetchPlanById(planId)

      if(response.success){
        const data = response.data
        console.log(data, "id data of plan")
        setName(data.name)
        setDuration(data.durationInDays)
        setPrice(data.price)
      }
    }

    fetchPlanByIdHandler(planId as string)
  }, [planId])


  const editPlanHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!name || !duration || !price || !planId) return
    const response = await editPlan(planId, {
      name,
      durationInDays: duration,
      price
    })

    if(response.success){
      navigate('/superadmin/plans')
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form onSubmit={(e) => editPlanHandler(e)} className="bg-white w-4/12 p-7 rounded border">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">EDIT PLAN</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Plan Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
          placeholder="e.g. 6 Month"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="durationInDays">Duration (in days)</label>
        <input
          type="number"
          id="durationInDays"
          name="durationInDays"
          value={duration ?? ""}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
          placeholder="e.g. 180"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="price">Price (INR)</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price ?? ""}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
          placeholder="e.g. 9999"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </form>
    </div>
  )
}

export default EditPlan
