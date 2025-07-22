import Typewriter from '../components/Typewriter';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20">
      <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-fade-in">
        SkillForge X
      </h1>

      <h2 className="text-xl md:text-2xl font-medium text-center text-gray-300 mb-12 animate-pulse">
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
          typeSpeed={55}
          deleteSpeed={35}
          delaySpeed={700}
        />
      </h2>

      <div className="flex gap-6 flex-wrap justify-center">
        <button
          onClick={() => navigate('/signup')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-pink-700 animate-slide-up"
        >
          🚀 Get Started
        </button>

        <button
          onClick={() => navigate('/projects')}
          className="border border-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 animate-slide-up"
        >
          🔍 Explore Projects
        </button>
      </div>

      <div className="mt-20 text-xs text-gray-500 text-center opacity-60">
        Crafted for builders, hackers & creators.
      </div>
    </div>
  );
};

export default Home;
