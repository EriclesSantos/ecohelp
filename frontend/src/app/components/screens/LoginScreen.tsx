import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-12 px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Leaf className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-bold text-white">EcoHelp</h1>
        </div>
        <p className="text-white/90 text-lg">Explore o protótipo</p>
      </div>

      <p className="px-6 pt-4 text-sm text-gray-600">Use dados fictícios. Este acesso demonstra a navegação e não autentica na API.</p>
      {/* Form */}
      <div className="flex-1 px-6 py-8">
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              E-mail
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-11 h-12 bg-gray-50 border-gray-200"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">
              Senha
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-11 h-12 bg-gray-50 border-gray-200"
                required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-[#1B5E3F] text-sm hover:underline"
            >
              Esqueci minha senha
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1B5E3F] hover:bg-[#1B5E3F]/90 h-12"
          >
            Explorar demonstração
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-500">ou</span>
            </div>
          </div>

          <div className="text-center">
            <span className="text-gray-600">Não tem uma conta? </span>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-[#1B5E3F] font-medium hover:underline"
            >
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
