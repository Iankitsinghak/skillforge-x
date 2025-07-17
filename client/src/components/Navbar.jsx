// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [localStorage.getItem('token')]); // triggers on token change

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-black border-b border-purple-700 text-white p-4 flex justify-between items-center shadow-md z-50 sticky top-0">
      <h1
        className="text-2xl font-extrabold text-purple-500 cursor-pointer"
        onClick={() => navigate('/')}
      >
        SkillForge X 🚀
      </h1>

      <div className="flex gap-6 text-md items-center font-medium">
        <Link to="/" className="hover:text-purple-400 transition">Home</Link>
        {isLoggedIn && (
          <>
            <Link to="/dashboard" className="hover:text-purple-400 transition">Dashboard</Link>
            <Link to="/projects" className="hover:text-purple-400 transition">Projects</Link>
            <Link to="/jobs" className="hover:text-purple-400 transition">Jobs</Link>
            <Link to="/challenges" className="hover:text-purple-400 transition">Challenges</Link>
            <Link to="/ask" className="hover:text-purple-400 transition">Ask AI</Link>
            <button
              onClick={handleLogout}
              className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-1 rounded-md transition"
            >
              Logout
            </button>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link
              to="/signup"
              className="bg-purple-600 hover:bg-purple-800 px-4 py-1 rounded-md text-white transition"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="border border-purple-500 hover:bg-purple-800 px-4 py-1 rounded-md text-white transition"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
