import { Home, User, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="min-h-screen w-64 bg-[#111111] p-4 text-white shadow-xl">
      <div className="text-2xl font-bold mb-10">SkillForge X</div>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-purple-500 flex items-center gap-2"><Home size={20}/> Dashboard</Link>
        <Link to="/profile" className="hover:text-purple-500 flex items-center gap-2"><User size={20}/> Profile</Link>
        <Link to="/challenges" className="hover:text-purple-500 flex items-center gap-2"><Star size={20}/> Challenges</Link>
        <Link to="/collab" className="hover:text-purple-500 flex items-center gap-2"><MessageCircle size={20}/> Collab</Link>
      </nav>
    </div>
  );
}
