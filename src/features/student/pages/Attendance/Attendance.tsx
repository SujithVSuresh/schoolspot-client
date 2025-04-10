import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

const Attendance = () => {

  const student = {
    name: "Sarah Johnson",
    grade: "11th Grade",
    studentId: "2024-0042",
    email: "sarah.j@school.edu",
    phone: "(555) 123-4567",
    address: "123 Education Lane, Learning City, 12345",
    dateOfBirth: "August 15, 2006",
    profileImage: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&h=400&fit=crop",
    gpa: 3.85,
    attendance: 95.5,
    currentSemester: "Spring 2024",
    subjects: [
      { name: "Advanced Mathematics", grade: "A", teacher: "Dr. Smith", progress: 92 },
      { name: "Physics", grade: "A-", teacher: "Mrs. Wilson", progress: 88 },
      { name: "English Literature", grade: "B+", teacher: "Mr. Davis", progress: 85 },
      { name: "World History", grade: "A", teacher: "Ms. Thompson", progress: 94 }
    ],
    achievements: [
      "Science Fair First Place 2023",
      "Honor Roll - Fall 2023",
      "Math Olympiad Finalist",
      "Perfect Attendance Award"
    ],
    attendanceRecords: {
      monthlyStats: {
        present: 18,
        absent: 1,
        late: 2,
        total: 21,
        excused: 1
      },
      dailyRecords: [
        { date: "2024-03-01", status: "present", time: "8:25 AM" },
        { date: "2024-03-04", status: "present", time: "8:30 AM" },
        { date: "2024-03-05", status: "late", time: "8:45 AM" },
        { date: "2024-03-06", status: "present", time: "8:28 AM" },
        { date: "2024-03-07", status: "absent", time: "-", note: "Medical appointment" },
        { date: "2024-03-08", status: "present", time: "8:29 AM" },
        { date: "2024-03-11", status: "present", time: "8:27 AM" },
        { date: "2024-03-12", status: "late", time: "8:42 AM" },
        { date: "2024-03-13", status: "present", time: "8:30 AM" },
        { date: "2024-03-14", status: "present", time: "8:28 AM" }
      ]
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'absent':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'late':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'absent':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'late':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };
  return (
    <div>
         {/* Daily Records */}
         <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {student.attendanceRecords.dailyRecords.map((record, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(record.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(record.status)}`}>
                        {getStatusIcon(record.status)}
                        <span className="ml-1 capitalize">{record.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.note || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default Attendance
