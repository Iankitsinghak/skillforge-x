import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-[#0f172a] text-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-purple-400">SkillForge X</Link>
      <div className="flex gap-6 items-center">
        {token && (
          <>
            <Link to="/dashboard" className="hover:text-purple-400">Dashboard</Link>
            <Link to="/projects" className="hover:text-purple-400">Projects</Link>
            <Link to="/jobs" className="hover:text-purple-400">Jobs</Link>
            <Link to="/challenges" className="hover:text-purple-400">Challenges</Link>
            <Link to="/ask" className="hover:text-purple-400">Ask AI</Link>
            <button
              onClick={handleLogout}
              className="ml-4 bg-purple-600 px-4 py-1 rounded hover:bg-purple-800 transition"
            >
              Logout
            </button>
          </>
        )}
        {!token && (
          <>
            <Link to="/login" className="hover:text-purple-400">Login</Link>
            <Link to="/signup" className="hover:text-purple-400">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
