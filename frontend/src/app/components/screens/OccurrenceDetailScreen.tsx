import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Image, MessageCircle, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const timelineSteps = [
  {
    status: 'Aberto',
    date: '08/03/2026 14:30',
    description: 'Ocorrência registrada no sistema',
    active: true,
    completed: true,
  },
  {
    status: 'Em análise',
    date: '08/03/2026 16:45',
    description: 'Equipe técnica está avaliando o caso',
    active: true,
    completed: true,
  },
  {
    status: 'Em atendimento',
    date: '09/03/2026 09:00',
    description: 'Equipe de campo mobilizada para o local',
    active: true,
    completed: false,
  },
  {
    status: 'Resolvido',
    date: '-',
    description: 'Aguardando conclusão do atendimento',
    active: false,
    completed: false,
  },
];

export function OccurrenceDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-6 px-6">
        <button
          onClick={() => navigate('/occurrences')}
          className="text-white mb-4 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>
        <h1 className="text-2xl font-bold text-white mb-2">Detalhes da Ocorrência</h1>
        <p className="text-white/80 text-sm">{id}</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto pb-6">
        {/* Main Info */}
        <div className="bg-white p-6 mb-4">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex-1">
              Enchente na Rua das Flores
            </h2>
            <Badge className="bg-blue-500 text-white">
              Em atendimento
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Registrado em 08/03/2026 às 14:30</span>
            </div>
            
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin className="w-5 h-5 mt-0.5" />
              <span className="text-sm">Rua das Flores, 123 - Centro, São Paulo/SP</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white p-6 mb-4">
          <h3 className="font-semibold text-gray-900 mb-3">Descrição</h3>
          <p className="text-gray-600 leading-relaxed">
            Alagamento intenso causado pelas fortes chuvas das últimas 48 horas. 
            A água atingiu aproximadamente 50cm de altura, afetando residências 
            e o comércio local. Sistema de drenagem aparenta estar obstruído.
          </p>
        </div>

        {/* Evidence */}
        <div className="bg-white p-6 mb-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Image className="w-5 h-5" />
            Evidências Anexadas
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white p-6 mb-4">
          <h3 className="font-semibold text-gray-900 mb-6">Linha do Tempo</h3>
          <div className="space-y-6">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.completed
                        ? 'bg-[#1B5E3F] text-white'
                        : step.active
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {step.completed ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div
                      className={`w-0.5 h-12 ${
                        step.completed ? 'bg-[#1B5E3F]' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
                
                <div className="flex-1 pb-4">
                  <h4 className={`font-semibold mb-1 ${
                    step.active ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.status}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">{step.description}</p>
                  <p className="text-xs text-gray-500">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="px-6">
          <Button
            onClick={() => navigate('/chat')}
            className="w-full bg-[#1B5E3F] hover:bg-[#1B5E3F]/90 h-12 gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com Suporte
          </Button>
        </div>
      </div>
    </div>
  );
}
