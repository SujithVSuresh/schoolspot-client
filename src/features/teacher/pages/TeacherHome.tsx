import logo from "../../../assets/images/logo.png";
import { useDispatch } from 'react-redux';
import { removeTeacher } from '../redux/teacherSlice';

const TeacherHome = () => {
  const dispatch = useDispatch()

  return (
    <div>
          <header
      className={`container mx-auto bg-blue-200 ${
        location.pathname === "/school-info" ? "lg:px-44 md:px-5 px-5" : "lg:px-10 md:px-10 px-10"
      } py-4 flex items-center justify-between`}
    >
      <img src={logo} alt="" className="lg:h-10 md:h-8 h-8" />


                <button
                onClick={() => dispatch(removeTeacher())}
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
              >
                Logout
              </button>
      
    </header>
      Welcome to Teacher home page
    </div>
  )
}

export default TeacherHome
