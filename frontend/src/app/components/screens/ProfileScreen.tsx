import { useNavigate } from 'react-router-dom';
import { User, MapPin, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';
import { BottomNav } from '../BottomNav';
import { Card } from '../ui/card';
import { Switch } from '../ui/switch';

const menuItems = [
  {
    icon: User,
    label: 'Dados Cadastrais',
    description: 'Nome, CPF, email e telefone',
    action: '/profile/edit',
  },
  {
    icon: MapPin,
    label: 'Endereços Salvos',
    description: 'Gerencie seus endereços',
    action: '/profile/addresses',
  },
  {
    icon: Bell,
    label: 'Notificações',
    description: 'Configure seus alertas',
    action: '/profile/notifications',
  },
  {
    icon: Shield,
    label: 'Privacidade e Segurança',
    description: 'Senha e configurações de conta',
    action: '/profile/security',
  },
];

export function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-8 px-6">
        <h1 className="text-2xl font-bold text-white mb-6">Perfil</h1>
        
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <User className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white mb-1">João Silva</h2>
            <p className="text-white/80 text-sm">joao.silva@email.com</p>
            <p className="text-white/70 text-xs mt-1">CPF: 123.456.789-00</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 py-6 pb-24">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 text-center border-gray-200">
            <p className="text-3xl font-bold text-[#1B5E3F] mb-1">4</p>
            <p className="text-sm text-gray-600">Ocorrências</p>
          </Card>
          <Card className="p-4 text-center border-gray-200">
            <p className="text-3xl font-bold text-[#4CAF50] mb-1">2</p>
            <p className="text-sm text-gray-600">Resolvidas</p>
          </Card>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 mb-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.label}
                onClick={() => navigate(item.action)}
                className="p-4 cursor-pointer hover:shadow-md transition-shadow border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-0.5">
                      {item.label}
                    </h3>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Settings */}
        <Card className="p-4 mb-6 border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Configurações Rápidas</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 text-sm">
                  Notificações Push
                </p>
                <p className="text-xs text-gray-500">
                  Receber alertas no dispositivo
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 text-sm">
                  Alertas por Email
                </p>
                <p className="text-xs text-gray-500">
                  Receber atualizações por email
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>

        {/* Logout */}
        <button
          onClick={() => navigate('/login')}
          className="w-full flex items-center justify-center gap-2 py-4 text-red-600 font-medium hover:bg-red-50 rounded-xl transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sair da Conta
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
