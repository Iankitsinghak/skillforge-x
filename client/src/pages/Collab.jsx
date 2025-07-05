// ✅ FILE: client/src/pages/Collab.jsx
import React from 'react';

const teams = [
  {
    name: 'Team Phoenix',
    desc: 'Looking for React + Node devs to join our startup-style project.',
    members: 3,
  },
  {
    name: 'Algo Ninjas',
    desc: 'Crack DSA challenges weekly. Consistency + Learning = 🔥',
    members: 5,
  },
  {
    name: 'Open Source Buffs',
    desc: 'Contribute to GitHub repos & help juniors get started.',
    members: 4,
  },
];

export default function Collab() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">🤝 Collaborate</h1>
      <p className="text-gray-300 mb-6">
        Find a squad. Build cool sh*t. Dominate hackathons. Let’s collab!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team, i) => (
          <div key={i} className="bg-zinc-800 p-5 rounded-xl hover:shadow-lg border border-zinc-700">
            <h2 className="text-xl font-bold mb-1">{team.name}</h2>
            <p className="text-gray-400 text-sm mb-3">{team.desc}</p>
            <span className="text-sm bg-purple-600 px-3 py-1 rounded-full inline-block">
              {team.members} Members
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
