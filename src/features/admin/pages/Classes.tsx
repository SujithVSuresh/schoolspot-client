import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import { MoreVertical } from 'lucide-react'
import { Search } from 'lucide-react'
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Classes = () => {
  const navigate = useNavigate()
    const [searchParams ,setSearchParams ] = useSearchParams()
    const [searchClass, setSearchClass] = useState("")

    useEffect(() => {
        const handler = setTimeout(() => {
            if(searchClass == ""){
                setSearchParams()
            }else{
            setSearchParams({
                search: searchClass
            })
            }
        
        
          }, 500);
      
          return () => clearTimeout(handler);

    }, [searchClass, setSearchParams])

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
        
    {/* Sidebar */}
    <Sidebar />

    {/* Header */}
    <div className="flex-1">
      <DashboardHeader />

      <div className="pt-6 md:pt-16 px-4 sm:px-8 md:pl-28 md:pr-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
  <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0 md:ml-4">
    Classes
  </h1>
  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
 {/* <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <input
        // value={searchStudent}
        // onChange={(e) => setSearchStudent(e.target.value)}
        type="text"
        placeholder="Search..."
        className="w-full sm:w-40 pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent"
      />

      <button
        // onClick={() => updateQuery({ search: searchStudent, page: 1, sort: sortStudent })}
        className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
      >
        <Search className="h-5 w-5" />
      </button>
    </div>  */}
        <div className="relative">
          <input
          onChange={(e) => setSearchClass(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
    <button
      onClick={() => navigate('/add-class')}
      className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
    >
      {/* <UserPlus className="h-5 w-5" /> */}
      Add Class
    </button> 
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

      <div className="bg-gray-100 rounded-xl p-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <img
              src={student.profilePhoto}
              alt={student.fullName}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            /> */}
            <div>
             <div className='flex'>
              <h3 className="font-medium text-gray-700 text-sm sm:text-base">
               Class - 5 
              </h3>

              <h3 className="font-medium text-gray-700 ml-5 text-sm sm:text-base">
               Section - B 
              </h3>

              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">Strength: 28</p>
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
            {/* <img
              src={student.profilePhoto}
              alt={student.fullName}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            /> */}
            <div>
             <div className='flex'>
              <h3 className="font-medium text-gray-700 text-sm sm:text-base">
               Class - 5 
              </h3>

              <h3 className="font-medium text-gray-700 ml-5 text-sm sm:text-base">
               Section - B 
              </h3>

              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">Strength: 28</p>
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
            {/* <img
              src={student.profilePhoto}
              alt={student.fullName}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            /> */}
            <div>
             <div className='flex'>
              <h3 className="font-medium text-gray-700 text-sm sm:text-base">
               Class - 5 
              </h3>

              <h3 className="font-medium text-gray-700 ml-5 text-sm sm:text-base">
               Section - B 
              </h3>

              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">Strength: 28</p>
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
            {/* <img
              src={student.profilePhoto}
              alt={student.fullName}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            /> */}
            <div>
             <div className='flex'>
              <h3 className="font-medium text-gray-700 text-sm sm:text-base">
               Class - 5 
              </h3>

              <h3 className="font-medium text-gray-700 ml-5 text-sm sm:text-base">
               Section - B 
              </h3>

              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">Strength: 28</p>
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

{/* <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4">
  <button
    disabled={page === 1}
    onClick={() => updateQuery({ page: page - 1 })}
    className={`p-2 sm:px-4 sm:py-2 rounded-md text-white transition ${
      page === 1
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-600"
    }`}
  >
    <ChevronLeft className="h-5 w-5" />
  </button>

  <span className="text-gray-700 font-medium text-xs sm:text-sm">
    Page {page} of {totalPages}
  </span>

  <button
    disabled={page === totalPages}
    onClick={() => updateQuery({ page: page + 1 })}
    className={`p-2 sm:px-4 sm:py-2 rounded-md text-white transition ${
      page === totalPages
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-600"
    }`}
  >
    <ChevronRight className="h-5 w-5" />
  </button>
</div> */}
</div>

    </div>
  </div>
  )
}

export default Classes
