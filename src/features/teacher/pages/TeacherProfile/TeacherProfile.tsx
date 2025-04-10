import { Phone, GraduationCap, BookOpen, Clock, Building, User, Briefcase } from 'lucide-react';


const TeacherProfile = () => {

    const teacherData = {
        fullName: "Dr. Michael Anderson",
        phoneNumber: "8590369084",
        subjectSpecialized: "Physics",
        qualification: "Ph.D. in Physics Education",
        experience: "12 years",
        profilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      };
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto bg-white rounded-xl border overflow-hidden">
      {/* Header/Banner Section */}
      <div className="h-32 bg-gradient-to-r bg-gray-400"></div>
      
      {/* Profile Section */}
      <div className="relative px-6 pb-8">
        {/* Profile Image */}
        <div className="relative -mt-16 mb-4">
          <img
            className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover"
            src={teacherData.profilePhoto}
            alt={teacherData.fullName}
          />
        </div>

        {/* Basic Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold my-5 text-gray-800">
          {teacherData.fullName}
          </h2>
          <p className="text-lg text-indigo-600">{teacherData.subjectSpecialized} Specialist</p>
        </div>

        {/* Contact & Professional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <Phone className="h-5 w-5 mr-3 text-indigo-600" />
              <span>{teacherData.phoneNumber}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <GraduationCap className="h-5 w-5 mr-3 text-indigo-600" />
              <span>{teacherData.qualification}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Briefcase className="h-5 w-5 mr-3 text-indigo-600" />
              <span>{teacherData.experience} of Teaching Experience</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <Building className="h-5 w-5 mr-3 text-indigo-600" />
              <span>Room 301, Science Building</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Clock className="h-5 w-5 mr-3 text-indigo-600" />
              <span>Office Hours: 2:30 PM - 4:00 PM</span>
            </div>
            <div className="flex items-center text-gray-700">
              <User className="h-5 w-5 mr-3 text-indigo-600" />
              <span>Department Head</span>
            </div>
          </div>
        </div>

        {/* Current Classes */}
        {/* <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 mr-2 text-indigo-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Advanced Physics</p>
                  <p className="text-sm text-gray-600">Monday/Wednesday</p>
                  <p className="text-sm text-gray-600">9:00 AM - 10:30 AM</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 mr-2 text-indigo-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Physics Lab</p>
                  <p className="text-sm text-gray-600">Tuesday/Thursday</p>
                  <p className="text-sm text-gray-600">1:00 PM - 2:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Expertise Areas */}
        {/* <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
              Quantum Mechanics
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
              Electromagnetic Theory
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
              Modern Physics
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
              Laboratory Techniques
            </span>
          </div>
        </div> */}

        {/* Publications & Achievements */}
        {/* <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <GraduationCap className="h-5 w-5 mr-2 text-indigo-600 mt-1" />
              <div>
                <p className="text-gray-700">Best Teacher Award 2023</p>
              </div>
            </div>
            <div className="flex items-start">
              <GraduationCap className="h-5 w-5 mr-2 text-indigo-600 mt-1" />
              <div>
                <p className="text-gray-700">Published "Modern Physics Teaching Methods" in Education Journal</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default TeacherProfile
