

const FeesPayment = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
        Fees Payment
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <button
        //   onClick={() => navigate(`/dashboard/attendance/new/${classId}`)}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          {/* <Plus className="h-5 w-5" /> */}
          Add attendance
        </button>
      </div>
    </div>

      <div className="w-8/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* {attendanceData.map((student, index) => ( */}
          <div
            className={`rounded-xl p-4 relative h- bg-green-100`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                    Mid-Term Fees
                  </h3>
                  <p className="text-xs text-gray-500">
                    Due: May 5, 2021
                  </p>
                </div>
              </div>
              {/* Menu Button */}
              <button
                // onClick={() => toggleMenu(index)}
                className="text-gray-400 hover:text-gray-600 transition-colors relative"
              >
                {/* <MoreVertical className="h-5 w-5" /> */}
              </button>
   
            </div>
          </div>
        {/* ))} */}
      </div>

  </>
  )
}

export default FeesPayment
