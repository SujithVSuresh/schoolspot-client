
const Card = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">6 Month Plan</h2>
      <div className="space-y-1 text-gray-600 text-sm">
        <p><span className="font-medium">Duration:</span> 180 days</p>
        <p><span className="font-medium">Price:</span> ₹9,999</p>
      </div>
    </div>
  )
}

export default Card
