import Sidebar from "../layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#1a1a1a] p-8 text-white">
        <h1 className="text-3xl font-bold mb-6">Welcome back, Captain 🧠</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#2a2a2a] p-6 rounded-2xl shadow-xl">Skill Matcher (AI here)</div>
          <div className="bg-[#2a2a2a] p-6 rounded-2xl shadow-xl">Recommended Projects</div>
          <div className="bg-[#2a2a2a] p-6 rounded-2xl shadow-xl">Weekly Challenge</div>
          <div className="bg-[#2a2a2a] p-6 rounded-2xl shadow-xl">Collab Invites</div>
        </div>
      </div>
    </div>
  );
}
