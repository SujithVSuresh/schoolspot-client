import DashboardHeader from '../components/DashboardHeader'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
    <DashboardHeader />
    <Sidebar />
    <div className='pt-16 pl-28 pr-10 bg-gray-50 min-h-screen'>
        <Outlet />
    </div>
  
</div>
  )
}

export default Dashboard
