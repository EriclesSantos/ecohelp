import { WifiOff, FileX, Bell, Map } from 'lucide-react';
import { Button } from '../ui/button';

type EmptyStateType = 'no-connection' | 'no-occurrences' | 'no-notifications' | 'map-error';

interface EmptyStateProps {
  type: EmptyStateType;
  onRetry?: () => void;
}

const states = {
  'no-connection': {
    icon: WifiOff,
    title: 'Sem conexão',
    description: 'Não foi possível conectar à internet. Verifique sua conexão e tente novamente.',
    buttonText: 'Tentar Novamente',
  },
  'no-occurrences': {
    icon: FileX,
    title: 'Nenhuma ocorrência',
    description: 'Você ainda não registrou nenhuma ocorrência. Clique no botão abaixo para começar.',
    buttonText: 'Nova Ocorrência',
  },
  'no-notifications': {
    icon: Bell,
    title: 'Sem notificações',
    description: 'Você está em dia! Não há novas notificações no momento.',
    buttonText: null,
  },
  'map-error': {
    icon: Map,
    title: 'Erro ao carregar mapa',
    description: 'Não foi possível carregar o mapa. Tente novamente mais tarde.',
    buttonText: 'Recarregar',
  },
};

export function EmptyStateScreen({ type, onRetry }: EmptyStateProps) {
  const state = states[type];
  const Icon = state.icon;

  return (
    <div className="h-full bg-gray-50 flex flex-col items-center justify-center px-8">
      <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-16 h-16 text-gray-400" strokeWidth={1.5} />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
        {state.title}
      </h2>
      
      <p className="text-gray-600 text-center mb-8 max-w-sm leading-relaxed">
        {state.description}
      </p>
      
      {state.buttonText && (
        <Button
          onClick={onRetry}
          className="bg-[#1B5E3F] hover:bg-[#1B5E3F]/90 h-12 px-8"
        >
          {state.buttonText}
        </Button>
      )}
    </div>
  );
}
