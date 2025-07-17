import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await loginUser(formData);
      if (res.token) {
        localStorage.setItem('token', res.token);
        navigate('/dashboard');
      } else {
        setError(res.msg || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f172a] p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>

        {error && (
          <p className="text-red-500 text-center mb-4 text-sm">{error}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-800 transition duration-300 py-3 rounded-lg font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
