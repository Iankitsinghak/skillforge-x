import { Link, useLocation } from 'react-router-dom';
import { Home, User, Trophy, Users } from 'lucide-react';

const links = [
  { to: '/', icon: <Home />, label: 'Home' },
  { to: '/dashboard', icon: <Trophy />, label: 'Dashboard' },
  { to: '/profile', icon: <User />, label: 'Profile' },
  { to: '/challenges', icon: <Trophy />, label: 'Challenges' },
  { to: '/collab', icon: <Users />, label: 'Collab' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="min-w-[220px] bg-zinc-900 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">⚔️ SkillForge X</h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-700 transition ${
              location.pathname === link.to ? 'bg-zinc-800' : ''
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
