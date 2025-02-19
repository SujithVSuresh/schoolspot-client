import logo from '../../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Header = () => {
const navigate = useNavigate()
const location = useLocation()


  return (
    <header className="h-20 flex items-center justify-between p-10">
    <img src={logo} alt="" className="h-10" />
    {
      location.pathname === "/signup" ? (
        <h5 className="font-medium">
        Have an account?{" "}
        <span onClick={() => navigate('/signin')} className="text-blue-500 cursor-pointer font-semibold">
          Sign in
        </span>
      </h5>
      ) : (
        <h5 className="font-medium">
        Have an account?{" "}
        <span onClick={() => navigate('/signup')} className="text-blue-500 cursor-pointer font-semibold">
          Signup
        </span>
      </h5>
      )
    }

  </header>
  )
}

export default Header
