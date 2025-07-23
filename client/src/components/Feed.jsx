import React, { useEffect, useState } from 'react';
import { getMatchedJobs, getStartupJobs } from '../api/jobs';

const Feed = () => {
  const [matchedJobs, setMatchedJobs] = useState([]);
  const [startupJobs, setStartupJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const matched = await getMatchedJobs();
        const startups = await getStartupJobs();
        setMatchedJobs(matched);
        setStartupJobs(startups);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      }
    };
    fetchJobs();
  }, []);

  const JobCard = ({ job }) => (
    <div className="bg-white shadow-md rounded-xl p-5 mb-5 border border-gray-200">
      <h3 className="text-xl font-bold text-blue-600">{job.title}</h3>
      <p className="text-gray-700 text-sm mt-1">{job.description}</p>
      <div className="text-sm mt-2 text-gray-500">
        Required: {job.requiredSkills?.join(', ') || 'N/A'}
      </div>
    </div>
  );

  return (
    <div className="p-4 max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">🔥 Matched Jobs</h2>
      {matchedJobs.length > 0 ? matchedJobs.map((job) => (
        <JobCard key={job._id} job={job} />
      )) : (
        <p className="text-gray-500">No matched jobs found.</p>
      )}

      <h2 className="text-2xl font-bold mt-10 mb-4 text-green-700">🚀 Startup Jobs</h2>
      {startupJobs.length > 0 ? startupJobs.map((job) => (
        <JobCard key={job._id} job={job} />
      )) : (
        <p className="text-gray-500">No startup jobs available.</p>
      )}
    </div>
  );
};

export default Feed;
