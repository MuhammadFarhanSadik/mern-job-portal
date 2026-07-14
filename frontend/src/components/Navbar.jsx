import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
          JobPortal
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
          <Link to="/jobs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Jobs</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {token ? (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-semibold">Dashboard</Link>
              <button 
                onClick={handleLogout}
                className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
              <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;