import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6">
        <span className="text-purple-500">SkillForge X</span>
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-300 mb-10">
        <Typewriter
          words={[
            'Best platform for team collab',
            'Join real dev challenges',
            'Auto-matched jobs & projects',
            'Build your dream tech profile',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </h2>

      <div className="flex gap-6 mt-4 flex-wrap justify-center">
        <button
          onClick={() => navigate('/signup')}
          className="bg-purple-600 hover:bg-purple-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
        >
          🚀 Get Started
        </button>

        <button
          onClick={() => navigate('/projects')}
          className="border border-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
        >
          🔍 Explore Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
