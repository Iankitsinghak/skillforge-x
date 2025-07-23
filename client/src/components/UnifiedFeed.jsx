import { useEffect, useState } from 'react';
import { getMatchedJobs } from '../api/jobs';
import { getMatchedProjects } from '../api/projects';

const UnifiedFeed = () => {
  const [jobs, setJobs] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getMatchedJobs().then(data => setJobs(data || []));
    getMatchedProjects().then(data => setProjects(data || []));
  }, []);

  const combinedFeed = [
    ...projects.map(item => ({ ...item, type: 'project' })),
    ...jobs.map(item => ({ ...item, type: 'job' }))
  ].sort(() => Math.random() - 0.5); // Shuffle randomly

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">🚀 Your Feed</h2>
      <div className="space-y-4">
        {combinedFeed.map((item, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 p-5 rounded-xl shadow hover:shadow-purple-700 transition-all"
          >
            <h3 className="text-xl font-bold text-indigo-400">
              {item.type === 'job' ? `💼 ${item.title}` : `🛠 ${item.title}`}
            </h3>
            <p className="text-gray-400 mt-1">{item.description}</p>
            <p className="text-sm mt-2">
              {item.type === 'job'
                ? `🏢 Company: ${item.company}`
                : `👨‍💻 Posted By: ${item.postedBy?.username || 'N/A'}`}
            </p>
            <p className="text-sm text-gray-500">
              🧠 Required: {item.requiredSkills?.join(', ') || 'None'}
            </p>
            {item.type === 'job' && (
              <button
                className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                onClick={async () => {
                  try {
                    await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/apply`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                      },
                      body: JSON.stringify({ jobId: item._id }),
                    });
                    alert('Application sent!');
                  } catch (e) {
                    alert('Failed to apply.');
                  }
                }}
              >
                Apply Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnifiedFeed;
