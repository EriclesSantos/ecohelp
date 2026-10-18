import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText } from 'lucide-react';
import { BottomNav } from '../BottomNav';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';

const occurrences = [
  {
    id: 'ECO-2024-001',
    title: 'Enchente na Rua das Flores',
    status: 'Em atendimento',
    date: '08/03/2026',
    statusColor: 'bg-blue-500',
    summary: 'Alagamento intenso causado pelas fortes chuvas',
  },
  {
    id: 'ECO-2024-002',
    title: 'Contaminação de córrego',
    status: 'Em análise',
    date: '05/03/2026',
    statusColor: 'bg-yellow-500',
    summary: 'Descarte irregular de produtos químicos',
  },
  {
    id: 'ECO-2024-003',
    title: 'Deslizamento de terra',
    status: 'Resolvido',
    date: '28/02/2026',
    statusColor: 'bg-green-500',
    summary: 'Área estabilizada e sinalizada',
  },
  {
    id: 'ECO-2024-004',
    title: 'Queimada em área verde',
    status: 'Aberto',
    date: '10/03/2026',
    statusColor: 'bg-red-500',
    summary: 'Fogo em vegetação próxima a residências',
  },
];

const statusOptions = [
  { value: 'all', label: 'Todos' },
  { value: 'open', label: 'Aberto' },
  { value: 'analyzing', label: 'Em análise' },
  { value: 'attending', label: 'Em atendimento' },
  { value: 'resolved', label: 'Resolvido' },
];

export function OccurrencesScreen() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-6 px-6">
        <h1 className="text-2xl font-bold text-white mb-4">Minhas Ocorrências</h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar por protocolo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-11 h-12 bg-white border-0"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                activeFilter === option.value
                  ? 'bg-[#1B5E3F] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Occurrences List */}
      <div className="flex-1 overflow-auto px-6 py-6 pb-24">
        <div className="space-y-4">
          {occurrences.map((occurrence) => (
            <Card
              key={occurrence.id}
              onClick={() => navigate(`/occurrence/${occurrence.id}`)}
              className="p-4 cursor-pointer hover:shadow-md transition-shadow border-gray-200"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#1B5E3F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#1B5E3F]" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">{occurrence.id}</p>
                      <h3 className="font-semibold text-gray-900">
                        {occurrence.title}
                      </h3>
                    </div>
                    <Badge className={`${occurrence.statusColor} text-white text-xs flex-shrink-0`}>
                      {occurrence.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">{occurrence.summary}</p>
                  
                  <p className="text-xs text-gray-500">
                    Registrado em {occurrence.date}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
