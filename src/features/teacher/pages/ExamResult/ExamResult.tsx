import React, { useState } from 'react';
import { Search, Filter, Download, ArrowUpDown, BookOpen, Users, Award, PieChart } from 'lucide-react';

const ExamResult = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedClass, setSelectedClass] = useState('Class 10A');
    const [selectedSubject, setSelectedSubject] = useState('Physics');
    const [selectedExam, setSelectedExam] = useState('Midterm Examination');
    
    // Mock data for exam marks
    const students = [
      {
        id: 1,
        name: 'Alice Johnson',
        rollNo: '1001',
        marks: {
          theory: 85,
          practical: 92,
          total: 177
        },
        grade: 'A+',
        rank: 1
      },
      {
        id: 2,
        name: 'Bob Smith',
        rollNo: '1002',
        marks: {
          theory: 78,
          practical: 88,
          total: 166
        },
        grade: 'A',
        rank: 3
      },
      {
        id: 3,
        name: 'Charlie Brown',
        rollNo: '1003',
        marks: {
          theory: 82,
          practical: 90,
          total: 172
        },
        grade: 'A',
        rank: 2
      },
      {
        id: 4,
        name: 'Diana Miller',
        rollNo: '1004',
        marks: {
          theory: 65,
          practical: 75,
          total: 140
        },
        grade: 'B',
        rank: 5
      },
      {
        id: 5,
        name: 'Edward Wilson',
        rollNo: '1005',
        marks: {
          theory: 70,
          practical: 82,
          total: 152
        },
        grade: 'B+',
        rank: 4
      }
    ];
  
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.includes(searchQuery)
    );
  
    const classOptions = ['Class 10A', 'Class 10B', 'Class 10C'];
    const subjectOptions = ['Physics', 'Chemistry', 'Mathematics'];
    const examOptions = ['Midterm Examination', 'Final Examination', 'Unit Test 1'];
  
    const stats = {
      totalStudents: students.length,
      passPercentage: '92%',
      averageScore: '161.4',
      highestScore: '177'
    };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Exam Marks</h1>
        <p className="mt-2 text-gray-600">View and manage student examination results</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Users />} title="Total Students" value={stats.totalStudents} />
        <StatCard icon={<Award />} title="Pass Percentage" value={stats.passPercentage} />
        <StatCard icon={<PieChart />} title="Average Score" value={stats.averageScore} />
        <StatCard icon={<BookOpen />} title="Highest Score" value={stats.highestScore} />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          {classOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          {subjectOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <select
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          {examOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Download className="h-5 w-5" />
          <span>Export Results</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or roll number..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </button>
      </div>

      {/* Marks Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <span>Roll No</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <span>Student Name</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Theory</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Practical</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <span>Total</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.rollNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.marks.theory}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.marks.practical}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.marks.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      student.grade === 'A+' ? 'bg-green-100 text-green-800' :
                      student.grade === 'A' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {student.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#{student.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

function StatCard({ icon, title, value }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center">
          <div className="p-2 bg-indigo-50 rounded-lg">
            {React.cloneElement(icon, { className: "h-6 w-6 text-indigo-600" })}
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
          </div>
        </div>
      </div>
    );
  }

export default ExamResult
