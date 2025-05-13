
import Card from "./components/Card"


const Plans = () => {
  return (
    <>
<div className="w-full px-6 py-4">
  <div className="flex items-center justify-between">
    <div className="flex-1 text-center">
      <h1 className="text-2xl font-bold text-gray-800">SUBSCRIPTION PLANS</h1>
    </div>
    <div className="flex-none">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-sm shadow hover:bg-blue-700 transition duration-200">
        Add Plan
      </button>
    </div>
  </div>
</div>
      
      <div className="pt-5">

      </div>
      <Card />
    </>
  )
}

export default Plans
