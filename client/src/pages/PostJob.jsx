import { useState } from 'react';

const PostJob = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    requiredSkills: '',
    company: '',
    isStartup: false
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ...form,
        requiredSkills: form.requiredSkills.split(',').map(skill => skill.trim())
      })
    });

    const data = await res.json();
    setMsg(data.msg || 'Something went wrong');
    if (res.status === 201) {
      setForm({
        title: '',
        description: '',
        requiredSkills: '',
        company: '',
        isStartup: false
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">📝 Post New Job</h2>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <input type="text" name="title" placeholder="Job Title" value={form.title} onChange={handleChange} required className="w-full p-2 bg-gray-800 rounded" />
        <textarea name="description" placeholder="Job Description" value={form.description} onChange={handleChange} required className="w-full p-2 bg-gray-800 rounded" />
        <input type="text" name="requiredSkills" placeholder="Required Skills (comma separated)" value={form.requiredSkills} onChange={handleChange} required className="w-full p-2 bg-gray-800 rounded" />
        <input type="text" name="company" placeholder="Company Name" value={form.company} onChange={handleChange} required className="w-full p-2 bg-gray-800 rounded" />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="isStartup" checked={form.isStartup} onChange={handleChange} />
          Startup Job?
        </label>
        <button type="submit" className="bg-purple-600 px-4 py-2 rounded">Post Job</button>
        {msg && <p className="text-green-400">{msg}</p>}
      </form>
    </div>
  );
};

export default PostJob;
