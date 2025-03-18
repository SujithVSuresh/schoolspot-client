import React from 'react'

const DataCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
    <div className="bg-gray-100 p-4 rounded-full">
    {/* <BarChart3 className="w-5 h-5 text-indigo-600" /> */}
    </div>
    <div>
      <div className="text-xs text-gray-500 font-medium">Class Teacher</div>
      <div className="text-lg font-medium text-gray-900">
        Salman Faris
      </div>
    </div>
  </div>
  )
}

export default DataCard
