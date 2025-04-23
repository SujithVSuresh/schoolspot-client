import React from 'react'

interface InfoCardProps {
    icon: React.ElementType; 
    label: string;
    value: string;
  }

const ProfileCard = ({label, value, icon: Icon}: InfoCardProps) => {
  return (
    <div className="flex items-center gap-3 py-4 rounded-lg overflow-hidden">
    <div className='bg-gray-50 p-4 rounded-full'>
    <Icon className="w-5 h-5 text-blue-500" />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-gray-700">{value}</p>
    </div>
  </div>
  )
}

export default ProfileCard
