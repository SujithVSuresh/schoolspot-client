import Sidebar from "../components/Sidebar";
import { Search, UserPlus, MoreVertical } from "lucide-react";
import DashboardHeader from "../components/DashboardHeader";
import { useState } from "react";
// import { getAllStudents } from "../api/api";
// import { UserStoreType } from "../types/types";
import AddStudentModal from "../components/AddStudentModal";



interface Student {
  id: number;
  name: string;
  admissionNo: string;
  parent: string;
  phone: string;
  profile: string;
  class: string;
}

const studentsi: Student[] = [
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
  {
    id: 1,
    name: "Jason Statham",
    admissionNo: "Mathematics",
    parent: "Sujith",
    phone: "8590369084",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    class: "2 B",
  },
];

function Student() {
  const [studentAddModalOpen, setStudentAddModalOpen] = useState(false);
  // const [studentProfileModalOpen, setStudentProfileModalOpen] = useState(false);
 

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {studentAddModalOpen && (
        <AddStudentModal onClose={() => setStudentAddModalOpen(false)}/>
      )}

{/* {studentProfileModalOpen && (
              <div className="bg-white h-full w-5/12 fixed z-40 right-0">
              <form method="POST" className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-1 font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                  />
                </div>
      
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm mb-1 font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                  />
                </div>
      
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm mb-1 font-medium text-gray-700"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                  />
                </div>
      
                <div className="flex justify-end space-x-3">
                  <button
                  type="submit"
                    onClick={() => setStudentAddModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Submit
                  </button>
                </div>
              </form>
            </div>

      )}
 */}

      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <div className="flex-1">
        <DashboardHeader />

        <div className="pt-16 pl-28 pr-8">
          <div className="flex justify-between items-center my-5">
            <h1 className="text-2xl font-bold text-gray-800 ml-4">Students</h1>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setStudentAddModalOpen(true)}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <UserPlus className="h-5 w-5" />
                Add
              </button>
            </div>
          </div>
          {/* 
        <div className="bg-white rounded-2xl p-6">

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Sl No</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Account email</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Account status</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Created at</th>
               
                </tr>
              </thead>
              <tbody>
                {students && students.map((student, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">{index + 1}</td>
                    <td className="py-4 px-4">{student.email}</td>
                    <td className="py-4 px-4">{student.status}</td>
                    <td className="py-4 px-4">{student.createdAt}</td>
                    <td className="py-4 px-4">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>*/}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentsi.map((student, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={student.profile}
                      alt={student.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-700">
                        {student.name}
                      </h3>
                      <p className="text-sm text-gray-500">{student.class}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
