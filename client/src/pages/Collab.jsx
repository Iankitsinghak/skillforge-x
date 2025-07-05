import Sidebar from "../layout/Sidebar";

export default function Collab() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#1a1a1a] text-white p-8">
        <h2 className="text-3xl font-bold mb-4">🤝 Collaborate with Devs</h2>
        <div className="bg-[#2a2a2a] p-6 rounded-2xl shadow-xl max-w-3xl space-y-4">
          <div className="bg-[#1f1f1f] p-4 rounded-xl flex justify-between items-center">
            <div>
              <p className="font-semibold">DevRider69</p>
              <p className="text-sm text-gray-400">Looking for React dev to build a task tracker.</p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-semibold">Send Invite</button>
          </div>
          <div className="bg-[#1f1f1f] p-4 rounded-xl flex justify-between items-center">
            <div>
              <p className="font-semibold">AIMaster404</p>
              <p className="text-sm text-gray-400">Wants to collab on a Gemini AI idea.</p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-semibold">Send Invite</button>
          </div>
        </div>
      </div>
    </div>
  );
}
