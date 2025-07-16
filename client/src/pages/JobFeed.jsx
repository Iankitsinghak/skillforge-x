import { useEffect, useState } from 'react';
import { getMatchedJobs } from '../api/jobs';

const JobFeed = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getMatchedJobs().then(data => setJobs(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">💼 Jobs Matching Your Skills</h2>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-gray-900 p-5 rounded-xl shadow hover:shadow-purple-700">
            <h3 className="text-xl font-semibold text-purple-400">{job.title}</h3>
            <p className="text-gray-400">{job.description}</p>
            <p className="mt-2 text-sm">🛠 Required: {job.requiredSkills.join(', ')}</p>
            <p className="text-sm text-gray-500">🏢 Company: {job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobFeed;
