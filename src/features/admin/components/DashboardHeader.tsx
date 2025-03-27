import { Link } from "react-router-dom"

const DashboardHeader = () => {

  return (
    <div className="fixed w-full bg-opacity-50 z-10 flex bg-blue-400 justify-between items-center h-16 px-5">
    <div className="flex-1" />
    <div className="flex items-center gap-4">
      {/* <button className="p-2 hover:bg-gray-100 rounded-full">
        <Menu className="w-6 h-6 text-gray-600" />
      </button> */}
      <Link to={'/profile'}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
      </Link>
    </div>
  </div>
  )
}

export default DashboardHeader
