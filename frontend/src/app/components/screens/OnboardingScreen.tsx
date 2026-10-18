import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Shield, Bell, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';

const slides = [
  {
    icon: Camera,
    title: 'Registre Ocorrências',
    description: 'Documente impactos ambientais com fotos, vídeos e localização precisa.',
    color: '#4CAF50',
  },
  {
    icon: Shield,
    title: 'Envie Evidências',
    description: 'Compartilhe provas de forma segura e acompanhe cada etapa do processo.',
    color: '#2C5F6F',
  },
  {
    icon: Bell,
    title: 'Receba Apoio',
    description: 'Conecte-se com equipes de suporte e empresas especializadas em tempo real.',
    color: '#1B5E3F',
  },
];

export function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Skip Button */}
      <div className="flex justify-end p-4 pt-12">
        <button
          onClick={() => navigate('/login')}
          className="text-gray-500 text-sm"
        >
          Pular
        </button>
      </div>

      {/* Slides */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center mb-8"
              style={{ backgroundColor: `${slides[currentSlide].color}20` }}
            >
              <CurrentIcon
                className="w-16 h-16"
                style={{ color: slides[currentSlide].color }}
                strokeWidth={2}
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {slides[currentSlide].title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mb-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-[#1B5E3F]'
                : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="px-6 pb-8 space-y-3">
        {currentSlide < slides.length - 1 ? (
          <Button
            onClick={handleNext}
            className="w-full bg-[#1B5E3F] hover:bg-[#1B5E3F]/90 h-12"
          >
            Próximo
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        ) : (
          <>
            <Button
              onClick={() => navigate('/login')}
              className="w-full bg-[#1B5E3F] hover:bg-[#1B5E3F]/90 h-12"
            >
              Entrar
            </Button>
            <Button
              onClick={() => navigate('/register')}
              variant="outline"
              className="w-full h-12 border-[#1B5E3F] text-[#1B5E3F] hover:bg-[#1B5E3F]/5"
            >
              Criar Conta
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
