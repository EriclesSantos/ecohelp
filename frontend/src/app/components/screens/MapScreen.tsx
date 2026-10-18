import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Droplets, Flame, Mountain, Biohazard, Filter, X } from 'lucide-react';
import { BottomNav } from '../BottomNav';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const occurrences = [
  {
    id: 'ECO-2024-001',
    type: 'flood',
    title: 'Enchente na Rua das Flores',
    status: 'Em atendimento',
    position: { top: '35%', left: '45%' },
  },
  {
    id: 'ECO-2024-002',
    type: 'contamination',
    title: 'Contaminação de córrego',
    status: 'Em análise',
    position: { top: '55%', left: '60%' },
  },
  {
    id: 'ECO-2024-004',
    type: 'fire',
    title: 'Queimada em área verde',
    status: 'Aberto',
    position: { top: '25%', left: '70%' },
  },
];

const categoryIcons = {
  flood: { icon: Droplets, color: 'bg-blue-500', label: '💧 Enchente' },
  fire: { icon: Flame, color: 'bg-orange-500', label: '🔥 Queimada' },
  landslide: { icon: Mountain, color: 'bg-amber-700', label: '⛰️ Deslizamento' },
  contamination: { icon: Biohazard, color: 'bg-purple-500', label: '☣️ Contaminação' },
};

export function MapScreen() {
  const navigate = useNavigate();
  const [selectedOccurrence, setSelectedOccurrence] = useState<typeof occurrences[0] | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-4 px-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Mapa</h1>
            <p className="text-white/80 text-sm">Ocorrências na região</p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            {showFilters ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Filter className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 space-y-2">
            <p className="text-white/80 text-sm mb-2">Filtrar por categoria:</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(categoryIcons).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => toggleFilter(key)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeFilters.includes(key)
                      ? 'bg-white text-[#1B5E3F]'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Map */}
      <div className="flex-1 bg-gray-100 relative overflow-hidden">
        {/* Mock Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Occurrences Pins */}
        {occurrences.map((occurrence) => {
          const category = categoryIcons[occurrence.type as keyof typeof categoryIcons];
          const Icon = category.icon;

          return (
            <button
              key={occurrence.id}
              onClick={() => setSelectedOccurrence(occurrence)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={occurrence.position}
            >
              <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-pulse`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </button>
          );
        })}

        {/* Selected Occurrence Card */}
        {selectedOccurrence && (
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-6 pb-24">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">{selectedOccurrence.id}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {selectedOccurrence.title}
                </h3>
                <Badge className="bg-blue-500 text-white">
                  {selectedOccurrence.status}
                </Badge>
              </div>
              <button
                onClick={() => setSelectedOccurrence(null)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span>Localização próxima</span>
            </div>

            <Button
              onClick={() => navigate(`/occurrence/${selectedOccurrence.id}`)}
              className="w-full bg-[#1B5E3F] hover:bg-[#1B5E3F]/90"
            >
              Ver Detalhes Completos
            </Button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
