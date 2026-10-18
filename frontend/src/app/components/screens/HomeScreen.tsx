import { useNavigate } from 'react-router-dom';
import { Plus, MapPin, MessageCircle, Bell, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { BottomNav } from '../BottomNav';

const recentCases = [
  {
    id: 'ECO-2024-001',
    title: 'Enchente na Rua das Flores',
    status: 'Em atendimento',
    date: '08/03/2026',
    statusColor: 'bg-blue-500',
  },
  {
    id: 'ECO-2024-002',
    title: 'Contaminação de córrego',
    status: 'Em análise',
    date: '05/03/2026',
    statusColor: 'bg-yellow-500',
  },
];

export function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-8 px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Olá, João!</h1>
            <p className="text-white/80 text-sm">Como podemos ajudar hoje?</p>
          </div>
          <button
            onClick={() => navigate('/notifications')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm relative"
          >
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FFC107] rounded-full text-xs text-white flex items-center justify-center font-bold">
              3
            </span>
          </button>
        </div>

        {/* Quick Action Button */}
        <Button
          onClick={() => navigate('/new-occurrence')}
          className="w-full bg-white hover:bg-gray-50 text-[#1B5E3F] h-14 gap-2 shadow-lg"
        >
          <Plus className="w-5 h-5" strokeWidth={2.5} />
          <span className="font-semibold">Nova Ocorrência</span>
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto pb-20 px-6 py-6">
        {/* Alert Banner */}
        <div className="bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-gray-900">Alerta importante</p>
            <p className="text-xs text-gray-600 mt-1">
              Região com alto índice de chuvas. Fique atento a possíveis enchentes.
            </p>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card
            onClick={() => navigate('/occurrences')}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow border-gray-200"
          >
            <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center mb-3">
              <FileText className="w-6 h-6 text-[#4CAF50]" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              Minhas Solicitações
            </h3>
            <p className="text-xs text-gray-500">2 ativas</p>
          </Card>

          <Card
            onClick={() => navigate('/map')}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow border-gray-200"
          >
            <div className="w-12 h-12 bg-[#2C5F6F]/10 rounded-xl flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6 text-[#2C5F6F]" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              Mapa de Ocorrências
            </h3>
            <p className="text-xs text-gray-500">Ver região</p>
          </Card>

          <Card
            onClick={() => navigate('/chat')}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow border-gray-200"
          >
            <div className="w-12 h-12 bg-[#1B5E3F]/10 rounded-xl flex items-center justify-center mb-3">
              <MessageCircle className="w-6 h-6 text-[#1B5E3F]" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Chat de Apoio</h3>
            <p className="text-xs text-gray-500">1 nova msg</p>
          </Card>

          <Card
            onClick={() => navigate('/notifications')}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow border-gray-200"
          >
            <div className="w-12 h-12 bg-[#2C5F6F]/10 rounded-xl flex items-center justify-center mb-3">
              <Bell className="w-6 h-6 text-[#2C5F6F]" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              Notificações
            </h3>
            <p className="text-xs text-gray-500">3 novas</p>
          </Card>
        </div>

        {/* Recent Cases */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Casos Recentes</h2>
            <button
              onClick={() => navigate('/occurrences')}
              className="text-[#1B5E3F] text-sm font-medium"
            >
              Ver todos
            </button>
          </div>

          <div className="space-y-3">
            {recentCases.map((case_) => (
              <Card
                key={case_.id}
                onClick={() => navigate(`/occurrence/${case_.id}`)}
                className="p-4 cursor-pointer hover:shadow-md transition-shadow border-gray-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">{case_.id}</p>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {case_.title}
                    </h3>
                  </div>
                  <Badge className={`${case_.statusColor} text-white text-xs`}>
                    {case_.status}
                  </Badge>
                </div>
                <p className="text-xs text-gray-500">Data: {case_.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
