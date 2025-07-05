import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">📊 Dashboard</h1>
      <p className="text-gray-300 mb-6">
        Welcome back, dev warrior. Here’s your command center — track your XP, achievements, and ongoing quests.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">🔥 Total XP</h2>
          <p className="text-2xl font-bold">1320</p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">🛠 Projects</h2>
          <p className="text-2xl font-bold">4 Active</p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">🏆 Challenges</h2>
          <p className="text-2xl font-bold">3 Completed</p>
        </div>
      </div>
    </div>
  );
}
