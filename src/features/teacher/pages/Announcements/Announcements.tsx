import { useState } from 'react';
import { Bell, Pin, Calendar, Clock, Search, Filter, Plus, MoreVertical, Edit2, Trash2 } from 'lucide-react';


const Announcements = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    // Mock data for announcements
    const [announcements] = useState([
      {
        id: 1,
        title: 'Parent-Teacher Meeting',
        content: 'Annual parent-teacher meeting scheduled for all classes. Please ensure your attendance.',
        date: '2024-03-20',
        time: '14:00',
        isPinned: true,
        category: 'Meeting',
        author: 'Principal Smith'
      },
      {
        id: 2,
        title: 'Sports Day Preparation',
        content: 'All PE teachers are requested to submit their sports day planning document by end of this week.',
        date: '2024-03-18',
        time: '09:00',
        isPinned: false,
        category: 'Sports',
        author: 'Sports Department'
      },
      {
        id: 3,
        title: 'Library Closure Notice',
        content: 'The school library will remain closed on Friday for annual maintenance and inventory check.',
        date: '2024-03-15',
        time: '11:30',
        isPinned: false,
        category: 'Facility',
        author: 'Library Department'
      }
    ]);
  
    const filteredAnnouncements = announcements.filter(announcement =>
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const pinnedAnnouncements = filteredAnnouncements.filter(a => a.isPinned);
    const regularAnnouncements = filteredAnnouncements.filter(a => !a.isPinned);
  return (
<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
            <p className="mt-2 text-gray-600">View and manage school announcements</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus className="h-5 w-5" />
            <span>New Announcement</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search announcements..."
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

        {/* Pinned Announcements */}
        {pinnedAnnouncements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">📌 Pinned Announcements</h2>
            <div className="space-y-4">
              {pinnedAnnouncements.map((announcement) => (
                <AnnouncementCard key={announcement.id} announcement={announcement} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Announcements */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">All Announcements</h2>
          <div className="space-y-4">
            {regularAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AnnouncementCard({ announcement }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
            {announcement.isPinned && (
              <Pin className="h-4 w-4 text-indigo-600" />
            )}
          </div>
          <p className="mt-2 text-gray-600">{announcement.content}</p>
          
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {announcement.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {announcement.time}
            </div>
            <div className="flex items-center">
              <Bell className="h-4 w-4 mr-1" />
              {announcement.category}
            </div>
            <div>
              By {announcement.author}
            </div>
          </div>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <MoreVertical className="h-5 w-5 text-gray-500" />
          </button>
          
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit
                </button>
                <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Announcements
