import logo from "../../../../assets/images/dotlogo.png";
import { School } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchStudentProfile } from "../../api/api";
import { removeStudent } from "../../redux/studentSlice";
import { useDispatch } from "react-redux";
import NavLink from "./component/NavLink";


const StudentLayout = () => {
  const dispatch = useDispatch()
  const [studentProfile, setStudentProfile] = useState<{
    _id: string,
    fullName: string,
    class: string,
    section: string,
    roll: number,
    profilePhoto: string
}>({
  _id: "",
  fullName:"",
  class: "",
  section: "",
  roll: 0,
  profilePhoto: ""
})

useEffect(() => {
  fetchStudentProfileHandler()

}, [])


const fetchStudentProfileHandler = async () => {
  const response = await fetchStudentProfile("safsdafdf")
  setStudentProfile({
    _id: response.data._id,
    fullName:response.data.fullName,
    class: response.data.class,
    section: response.data.section,
    roll: response.data.roll,
    profilePhoto: response.data.profilePhoto
  })
}

const handleLogout = () => {
  dispatch(removeStudent());
};

  return (
    <>
      <header
        className={`bg-blue-20w-full py-4 px-10 flex items-center justify-between`}
      >
        <img src={logo} alt="" className="lg:h-10 md:h-8 h-8" />

        {/* <button
          onClick={() => dispatch(removeStudent())}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
        >
          Logout
        </button> */}
        <a onClick={() => handleLogout()} className="underline">Logout</a>

      </header>

      <section>
        <div className="relative bg-purple-100">
          {/* Cover Image */}
          <div className="h-36  bg-gray-200 flex justify-center">
            {/* <img
                  className="w-full h-full object-cover"
                  src={cover}
                  alt="Profile"
                /> */}
          </div>

          {/* Profile Section */}
          <div className="max-w-7xl absolute w-full top-24 right-0 left-0 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-end sm:space-x-5 mb-8">
              <div className="relative">
                <img
                  className="h-32 w-32 rounded-full object-cover ring-4 ring-white bg-white"
                  src={studentProfile.profilePhoto}
                  alt="Profile"
                />
              </div>
              <div className="mt-6 sm:mt-0 sm:flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-900 truncate">
                      {studentProfile.fullName}
                    </h1>
                    <div className="flex items-center mt-1 text-gray-500 text-sm">
                      <span>Class: {studentProfile.class} {studentProfile.section} - Roll no: {studentProfile.roll}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <School className="w-4 h-4 mr-1" />
                        <span>St Mary's Bethany School</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50">
                    View Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <NavLink />

            <div className="py-5 w-full flex justify-between border-t">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentLayout;
