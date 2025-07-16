import { useEffect, useState } from 'react';
import { getProfile } from '../api/auth';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setUser(data.user || null);
    };
    fetchProfile();
  }, []);

  if (!user) return <p className="text-white text-center mt-10">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-3xl font-bold mb-4">Welcome, {user.username} 👋</h2>
      <p className="text-lg text-gray-300">📧 Email: {user.email}</p>
      <p className="text-lg text-gray-300 mt-2">
        🧠 Skills: {user.skills && user.skills.length > 0 ? user.skills.join(', ') : 'No skills set'}
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">What's next?</h3>
        <ul className="list-disc ml-6 text-gray-400">
          <li>🚀 Explore Projects</li>
          <li>🎯 Join Weekly Challenges</li>
          <li>🧠 Ask AI Questions</li>
          <li>💼 Check Skill-Matched Jobs</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
