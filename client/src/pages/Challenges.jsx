import React from 'react';

const challenges = [
  {
    title: 'Build a Portfolio Website',
    level: 'Intermediate',
    status: 'Active',
  },
  {
    title: 'REST API with Flask',
    level: 'Beginner',
    status: 'Completed',
  },
  {
    title: 'MongoDB + React Project',
    level: 'Advanced',
    status: 'Ongoing',
  },
];

export default function Challenges() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">🏁 Challenges</h1>
      <p className="text-gray-300 mb-6">
        These are your missions. Build, deploy, and earn your dev badges.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((c, i) => (
          <div
            key={i}
            className="bg-zinc-800 p-5 rounded-xl border border-zinc-700 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
            <p className="text-gray-400 text-sm mb-1">Level: {c.level}</p>
            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                c.status === 'Completed'
                  ? 'bg-green-600'
                  : c.status === 'Ongoing'
                  ? 'bg-yellow-500'
                  : 'bg-blue-600'
              }`}
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
