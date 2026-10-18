import { useState } from 'react';
import { ArrowLeft, Send, Paperclip } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../BottomNav';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const messages = [
  {
    id: 1,
    sender: 'support',
    text: 'Olá! Recebemos sua ocorrência ECO-2024-001. Nossa equipe já está avaliando o caso.',
    time: '14:35',
  },
  {
    id: 2,
    sender: 'user',
    text: 'Obrigado! Quando vocês podem visitar o local?',
    time: '14:40',
  },
  {
    id: 3,
    sender: 'support',
    text: 'Prevemos uma visita técnica para amanhã pela manhã, entre 9h e 11h. Você estará disponível?',
    time: '14:45',
  },
  {
    id: 4,
    sender: 'user',
    text: 'Sim, estarei aqui. Preciso preparar algo?',
    time: '14:48',
  },
  {
    id: 5,
    sender: 'support',
    text: 'Não precisa se preocupar. Apenas mantenha o acesso ao local liberado. Entraremos em contato caso haja alguma mudança.',
    time: '14:50',
  },
];

export function ChatScreen() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-4 px-6">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/home')} className="text-white lg:hidden">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">ES</span>
            </div>
            <div>
              <h2 className="text-white font-semibold">Equipe de Suporte</h2>
              <p className="text-white/80 text-xs">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-6 pb-24 bg-gray-50">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  msg.sender === 'user'
                    ? 'bg-[#1B5E3F] text-white rounded-br-sm'
                    : 'bg-white text-gray-900 border border-gray-200 rounded-bl-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4 bg-white pb-20">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center text-gray-500">
            <Paperclip className="w-5 h-5" />
          </button>
          <Input
            type="text"
            placeholder="Digite sua mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 h-10 bg-gray-50 border-gray-200"
          />
          <Button
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-10 h-10 p-0 bg-[#1B5E3F] hover:bg-[#1B5E3F]/90"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
