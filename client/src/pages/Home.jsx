import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 py-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
        <Typewriter
          words={[
            'Build. Collaborate. Conquer.',
            'Join Coding Challenges!',
            'Find Skill-Matched Jobs & Projects',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
        Welcome to <span className="text-purple-500 font-bold">SkillForge X</span> — the ultimate hub for project building, team collaboration, and real developer growth!
      </p>

      <button
        onClick={() => navigate('/signup')}
        className="bg-purple-600 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-2xl text-lg transition-all duration-300 shadow-lg"
      >
        🚀 Get Started
      </button>

      <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3 text-left">
        <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold text-purple-400 mb-2">💻 AI-Powered Skill Matching</h3>
          <p className="text-gray-300">Get personalized project, challenge, and job suggestions based on your skills.</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold text-purple-400 mb-2">⚔️ Weekly Challenges</h3>
          <p className="text-gray-300">Join weekly dev/design/build challenges and earn rewards + leaderboard points.</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold text-purple-400 mb-2">🧠 Ask Anything AI</h3>
          <p className="text-gray-300">Use our Gemini-powered chatbot to ask any doubts, questions, or suggestions.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
