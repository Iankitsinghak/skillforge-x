import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    skills: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Signup.jsx me handleSubmit function ke andar

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const payload = {
      ...form,
      skills: form.skills.split(',').map(skill => skill.trim()), // FIXED
    };
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, payload);
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } else {
      setMessage('Signup failed');
    }
  } catch {
    setMessage('Signup failed');
  }
};


  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f172a] p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Create an Account</h2>

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full mb-4 p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full mb-4 p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="text"
          name="skills"
          value={form.skills}
          onChange={handleChange}
          placeholder="Skills (comma separated)"
          className="w-full mb-6 p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-800 transition duration-300 py-3 rounded-lg font-semibold"
        >
          Create Account
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-red-400">{message}</p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
