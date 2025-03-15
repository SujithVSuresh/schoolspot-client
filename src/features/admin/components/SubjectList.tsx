import { MoreVertical } from "lucide-react";


const SubjectList = () => {
  return (
    <div>
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
      Subjects
    </h1>
    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
      {/* <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <input
          value={searchStudent}
          onChange={(e) => setSearchStudent(e.target.value)}
          type="text"
          placeholder="Search..."
          className="w-full sm:w-40 pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent"
        />
        <select
          value={sortStudent}
          onChange={(e) => setSortStudent(e.target.value)}
          className="w-full sm:w-40 pl-4 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent appearance-none bg-white"
        >
          <option value="">Sort</option>
          <option value="name-asc">Name - a to z</option>
          <option value="name-desc">Name - z to a</option>
        </select>
        <button
          onClick={() => updateQuery({ search: searchStudent, page: 1, sort: sortStudent })}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
      <button
        onClick={() => navigate('/add-student')}
        className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
      >
        <UserPlus className="h-5 w-5" />
        Add
      </button> */}
    </div>
  </div>


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
  <div className="bg-gray-100 rounded-xl p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
   
              <div>
                <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                  Mathematics
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Abhinand Suresh</p>
              </div>
            </div>
            {/* Menu Button */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors relative"

            >
              <MoreVertical className="h-5 w-5" />
            </button>
            {/* Dropdown Menu */}
 
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
   
              <div>
                <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                  English
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Shreeved</p>
              </div>
            </div>
            {/* Menu Button */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors relative"

            >
              <MoreVertical className="h-5 w-5" />
            </button>
            {/* Dropdown Menu */}
 
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
   
              <div>
                <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                  English
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Shreeved</p>
              </div>
            </div>
            {/* Menu Button */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors relative"

            >
              <MoreVertical className="h-5 w-5" />
            </button>
            {/* Dropdown Menu */}
 
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
   
              <div>
                <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                  English
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Shreeved</p>
              </div>
            </div>
            {/* Menu Button */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors relative"

            >
              <MoreVertical className="h-5 w-5" />
            </button>
            {/* Dropdown Menu */}
 
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
   
              <div>
                <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                  English
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Shreeved</p>
              </div>
            </div>
            {/* Menu Button */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors relative"

            >
              <MoreVertical className="h-5 w-5" />
            </button>
            {/* Dropdown Menu */}
 
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
   
              <div>
                <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                  English
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Shreeved</p>
              </div>
            </div>
            {/* Menu Button */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors relative"

            >
              <MoreVertical className="h-5 w-5" />
            </button>
            {/* Dropdown Menu */}
 
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
   
              <div>
                <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                  English
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Shreeved</p>
              </div>
            </div>
            {/* Menu Button */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors relative"

            >
              <MoreVertical className="h-5 w-5" />
            </button>
            {/* Dropdown Menu */}
 
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
   
              <div>
                <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                  English
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Shreeved</p>
              </div>
            </div>
            {/* Menu Button */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors relative"

            >
              <MoreVertical className="h-5 w-5" />
            </button>
            {/* Dropdown Menu */}
 
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
   
              <div>
                <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                  English
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Shreeved</p>
              </div>
            </div>
            {/* Menu Button */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors relative"

            >
              <MoreVertical className="h-5 w-5" />
            </button>
            {/* Dropdown Menu */}
 
          </div>
        </div>
  </div>
      
    </div>
  )
}

export default SubjectList
