import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Camera } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export function NewOccurrenceScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/upload-evidence');
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-6 px-6">
        <button
          onClick={() => navigate('/home')}
          className="text-white mb-4 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>
        <h1 className="text-2xl font-bold text-white">Nova Ocorrência</h1>
        <p className="text-white/80 text-sm mt-1">
          Registre um impacto ambiental
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-auto px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-6 pb-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-700">
              Título da Ocorrência
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Ex: Enchente na Rua das Flores"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="h-12 bg-gray-50 border-gray-200"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-gray-700">
              Categoria do Problema
            </Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value })
              }
            >
              <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flood">💧 Enchente</SelectItem>
                <SelectItem value="fire">🔥 Queimada</SelectItem>
                <SelectItem value="landslide">⛰️ Deslizamento</SelectItem>
                <SelectItem value="contamination">☣️ Contaminação</SelectItem>
                <SelectItem value="other">📋 Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-700">
              Descrição Detalhada
            </Label>
            <Textarea
              id="description"
              placeholder="Descreva o que aconteceu, quando começou e quais são os impactos..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="min-h-32 bg-gray-50 border-gray-200 resize-none"
              required
            />
            <p className="text-xs text-gray-500">
              Seja o mais específico possível
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-gray-700">
              Localização
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="location"
                type="text"
                placeholder="Endereço ou referência"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="pl-11 h-12 bg-gray-50 border-gray-200"
                required
              />
            </div>
            <button
              type="button"
              className="text-[#1B5E3F] text-sm font-medium flex items-center gap-1"
            >
              <MapPin className="w-4 h-4" />
              Usar minha localização atual
            </button>
          </div>

          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-1">
              Você poderá adicionar fotos e vídeos na próxima etapa
            </p>
            <p className="text-xs text-gray-500">
              Evidências visuais fortalecem seu registro
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1B5E3F] hover:bg-[#1B5E3F]/90 h-12"
          >
            Continuar para Evidências
          </Button>
        </form>
      </div>
    </div>
  );
}
