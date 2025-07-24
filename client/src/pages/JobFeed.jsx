import { useEffect, useState } from 'react';
import { getMatchedJobs } from '../api/jobs';
import axios from 'axios';

const JobFeed = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getMatchedJobs();
        console.log("🔥 Matched Jobs:", data);
        setJobs(data || []);
      } catch (err) {
        console.error("❌ Error fetching matched jobs:", err.message);
        setJobs([]);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/jobs/apply`,
        { jobId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      alert('✅ Application sent to admin!');
    } catch (err) {
      console.error("❌ Job apply error:", err.message);
      alert('❌ Failed to apply to job');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">💼 Jobs Matching Your Skills</h2>

      {jobs.length === 0 ? (
        <p className="text-gray-500 text-lg">😢 No matching jobs found.</p>
      ) : (
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-900 p-5 rounded-xl shadow hover:shadow-purple-700"
            >
              <h3 className="text-xl font-semibold text-purple-400">{job.title}</h3>
              <p className="text-gray-400">{job.description}</p>
              <p className="mt-2 text-sm">
                🛠 Required: {job.skillsRequired?.join(', ') || 'N/A'}
              </p>
              <p className="text-sm text-gray-500">🏢 Company: {job.company}</p>
              <button
                onClick={() => handleApply(job._id)}
                className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Save + Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobFeed;
