import Sidebar from '../components/Sidebar';
import {  MoreVertical, Plus,  } from 'lucide-react';
import DashboardHeader from '../components/DashboardHeader';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  avatar: string;
}

const teachers: Teacher[] = [
  { id: 1, name: 'Jason Statham', subject: 'Mathematics', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop' }
];

const Teachers = () => {

  return (
<div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <div className="flex-1 p-8">
        <DashboardHeader />
      
        <div className="flex justify-between items-center my-5">
            <h1 className="text-2xl font-bold text-gray-800 ml-4">Teachers</h1>
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <Plus className="h-5 w-5" />
              Add
            </button>
            {/* <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
      
                />
              </div>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <UserPlus className="h-5 w-5" />
                Add
              </button>
            </div> */}
          </div>

   
        <div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="bg-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{teacher.name}</h3>
                      <p className="text-sm text-gray-500">{teacher.subject}</p>
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
  )
}

export default Teachers
