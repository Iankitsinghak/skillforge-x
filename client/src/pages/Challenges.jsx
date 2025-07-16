import { useEffect, useState } from 'react';
import { getChallenges } from '../api/challenges';
import { Link } from 'react-router-dom';

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    getChallenges().then(setChallenges);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">🎯 Weekly Challenges</h2>
      <div className="space-y-4">
        {challenges.map((ch, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-purple-400">{ch.title}</h3>
            <p className="text-sm text-gray-300">{ch.description}</p>
            <p className="text-sm text-gray-500">📅 Deadline: {new Date(ch.deadline).toLocaleDateString()}</p>
            <Link to={`/challenges/${ch._id}`} className="text-purple-500 hover:underline text-sm">
              View & Submit →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
