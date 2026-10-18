import { Home, Map, FileText, MessageCircle, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Map, label: 'Mapa', path: '/map' },
    { icon: FileText, label: 'Ocorrências', path: '/occurrences' },
    { icon: MessageCircle, label: 'Chat', path: '/chat' },
    { icon: User, label: 'Perfil', path: '/profile' },
  ];

  return (
    <nav className="absolute inset-x-0 bottom-0 mx-auto w-full bg-white/95 border-t border-gray-200 pb-safe backdrop-blur md:max-w-[390px]">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center flex-1 h-full"
            >
              <Icon 
                className={`w-6 h-6 ${isActive ? 'text-[#1B5E3F]' : 'text-gray-500'}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-xs mt-1 ${isActive ? 'text-[#1B5E3F] font-medium' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
