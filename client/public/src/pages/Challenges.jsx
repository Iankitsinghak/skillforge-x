import Sidebar from "../layout/Sidebar";

export default function Challenges() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#1a1a1a] text-white p-8">
        <h2 className="text-3xl font-bold mb-4">🏆 Weekly Challenges</h2>
        <div className="bg-[#2a2a2a] p-6 rounded-2xl shadow-xl max-w-3xl">
          <p className="text-gray-300 mb-4">Challenge #17: Build a Portfolio with GitHub Stats, Projects & Contact Page</p>
          <ul className="list-disc ml-6 text-sm text-gray-400">
            <li>Include GitHub profile integration</li>
            <li>Showcase 3 projects using cards</li>
            <li>Include contact form + social media links</li>
          </ul>
          <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full font-semibold">
            Submit Your GitHub Link
          </button>
        </div>
      </div>
    </div>
  );
}
