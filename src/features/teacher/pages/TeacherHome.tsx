import logo from "../../../assets/images/dotlogo.png";

const TeacherHome = () => {


  return (
    <div className="bg-white p-4">
          <header
      className={`container rounded-lg bg-red-300 mx-auto px-10 py-4 flex items-center justify-between`}
    >
      <img src={logo} alt="" className="lg:h-10 md:h-8 h-8" />
                {/* <button
                onClick={() => dispatch(removeTeacher())}
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
              >
                Logout
              </button> */}
    </header>
      <div className="min-h-screen">
      </div>
    </div>
  )
}

export default TeacherHome
