import React from 'react'
import DashboardHeader from './DashboardHeader'
import Sidebar from './Sidebar'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <DashboardHeader />
        <Sidebar />
        <div className='pt-24 pl-28 bg-gray-50 min-h-screen'>
        {children}
        </div>
      
    </div>
  )
}

export default DashboardLayout
