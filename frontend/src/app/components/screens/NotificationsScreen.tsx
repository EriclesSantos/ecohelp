import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../ui/card';

const notifications = [
  {
    id: 1,
    type: 'status',
    icon: CheckCircle,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-50',
    title: 'Status atualizado',
    message: 'Sua ocorrência ECO-2024-001 está agora "Em atendimento"',
    time: '2 horas atrás',
    read: false,
  },
  {
    id: 2,
    type: 'message',
    icon: MessageCircle,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    title: 'Nova mensagem',
    message: 'Equipe de suporte enviou uma mensagem sobre sua ocorrência',
    time: '4 horas atrás',
    read: false,
  },
  {
    id: 3,
    type: 'alert',
    icon: AlertCircle,
    iconColor: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
    title: 'Alerta meteorológico',
    message: 'Previsão de chuvas fortes para sua região nas próximas 24h',
    time: '6 horas atrás',
    read: false,
  },
  {
    id: 4,
    type: 'status',
    icon: CheckCircle,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-50',
    title: 'Ocorrência recebida',
    message: 'Protocolo ECO-2024-001 gerado com sucesso',
    time: 'Ontem às 14:30',
    read: true,
  },
];

export function NotificationsScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-6 px-6">
        <button
          onClick={() => navigate('/home')}
          className="text-white mb-4 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Notificações</h1>
            <p className="text-white/80 text-sm">3 não lidas</p>
          </div>
          <button className="text-white/90 text-sm hover:text-white">
            Marcar todas como lidas
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-auto px-6 py-6">
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card
                key={notification.id}
                className={`p-4 cursor-pointer hover:shadow-md transition-shadow ${
                  notification.read ? 'bg-white' : 'bg-blue-50/50 border-blue-200'
                }`}
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 ${notification.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${notification.iconColor}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1.5" />
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">
                      {notification.message}
                    </p>
                    
                    <p className="text-xs text-gray-500">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
