import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(formData);

    if (res.token) {
      localStorage.setItem('token', res.token);
      navigate('/dashboard');
    } else {
      setError(res.msg || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl w-[90%] max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input className="input" type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="input" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
