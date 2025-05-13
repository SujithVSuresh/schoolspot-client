import Header from "./components/Header"
import { Outlet } from "react-router-dom"

const SuperAdminLayout = () => {
  return (
    <div>
        <Header />

        <div className="min-h-screen p-4">
            <Outlet />
        </div>
      
    </div>
  )
}

export default SuperAdminLayout
