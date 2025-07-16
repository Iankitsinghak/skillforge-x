import { useState } from 'react';

const PostChallenge = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'coding',
    deadline: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/challenges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    setMsg(data.msg || 'Something went wrong');
    if (res.status === 201) {
      setForm({ title: '', description: '', type: 'coding', deadline: '' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">🛠️ Post New Challenge</h2>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Challenge Title"
          required
          className="w-full p-2 bg-gray-800 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Challenge Description"
          required
          className="w-full p-2 bg-gray-800 rounded"
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 rounded"
        >
          <option value="coding">Coding</option>
          <option value="design">Design</option>
          <option value="build">Build</option>
        </select>
        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          required
          className="w-full p-2 bg-gray-800 rounded"
        />
        <button type="submit" className="bg-purple-600 px-4 py-2 rounded">
          Submit Challenge
        </button>
        {msg && <p className="text-green-400">{msg}</p>}
      </form>
    </div>
  );
};

export default PostChallenge;
