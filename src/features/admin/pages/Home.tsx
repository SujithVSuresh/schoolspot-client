import { useState, useRef, useEffect } from 'react';
import { CreditCard, Clock } from 'lucide-react';
import logo from '../../../assets/images/logo.png';
import themeimg from '../../../assets/images/themeimg.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [showSigninOptions, setShowSigninOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSigninOptions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="container mx-auto px-52 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="" className="h-10" />
        </div>
        <div className="md:flex space-x-6 flex items-center relative">
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-indigo-600">Home</a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-indigo-600">Pages</a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-indigo-600">Pricing</a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-indigo-600">Portfolio</a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-indigo-600">Blog</a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-indigo-600">Contact</a>

          {/* Sign In Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowSigninOptions(!showSigninOptions)}
              className="text-sm font-medium text-gray-800 hover:text-indigo-600"
            >
              Sign In
            </button>
            {showSigninOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <button
                  onClick={() => navigate("/signin")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign in as Admin
                </button>
                <button
                  onClick={() => navigate("/teacher/signin")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign in as Teacher
                </button>
                <button
                  onClick={() => navigate("/student/signin")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign in as Student
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate('/school-info')}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-56 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-5xl md:text-5xl font-bold text-gray-800 leading-loose mb-8">
            Empowering Minds,<br />
            Shaping Futures.
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Simplifies student coursework management, academic progress tracking, and communication.
            Simplifies student coursework management, academic progress tracking, and communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Discover More
            </button>
            <button className="border border-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center">
              Explore Service <span className="ml-2">→</span>
            </button>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-indigo-600 mr-2" />
              <span className="text-sm text-gray-600">30-day free trial</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 text-indigo-600 mr-2" />
              <span className="text-sm text-gray-600">No credit card required</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative z-10">
            <img
              src={themeimg}
              alt="Student with backpack"
              className="rounded-lg max-w-full mx-auto"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-indigo-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
