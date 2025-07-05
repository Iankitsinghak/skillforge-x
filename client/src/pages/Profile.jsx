import Sidebar from "../layout/Sidebar";

export default function Profile() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#1a1a1a] text-white p-8">
        <h2 className="text-3xl font-bold mb-4">👤 Your Profile</h2>
        <div className="bg-[#2a2a2a] p-6 rounded-2xl shadow-xl max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="User Avatar" className="w-20 h-20 rounded-full" />
            <div>
              <h3 className="text-2xl font-semibold">Captain Ankit</h3>
              <p className="text-sm text-gray-400">Full Stack Dev | Tech Hustler</p>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Bio:</h4>
            <p className="text-gray-300">I build f💥cking awesome projects with AI, teamwork, and raw fire.</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Skills:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">C++</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">MongoDB</span>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-1">XP Progress</h4>
            <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
              <div className="bg-green-500 h-4 w-3/5 rounded-full"></div>
            </div>
            <p className="text-xs mt-1 text-gray-400">Level 3 - 60% to next level</p>
          </div>
        </div>
      </div>
    </div>
  );
}
