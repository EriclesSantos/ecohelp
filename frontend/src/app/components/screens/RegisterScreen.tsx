import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, User, CreditCard, Mail, Phone, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';

export function RegisterScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-8 px-6">
        <button
          onClick={() => navigate('/login')}
          className="text-white mb-4 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Leaf className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-bold text-white">Criar Conta</h1>
        </div>
        <p className="text-white/90">Junte-se à comunidade EcoHelp</p>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-6 overflow-auto pb-24">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Nome Completo
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-11 h-12 bg-gray-50 border-gray-200"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf" className="text-gray-700">
              CPF
            </Label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="cpf"
                type="text"
                placeholder="000.000.000-00"
                value={formData.cpf}
                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                className="pl-11 h-12 bg-gray-50 border-gray-200"
                required
              />
            </div>
          </div>

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
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-11 h-12 bg-gray-50 border-gray-200"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              Telefone
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 98765-4321"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                placeholder="Mínimo 8 caracteres"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pl-11 h-12 bg-gray-50 border-gray-200"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-700">
              Confirmar Senha
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Digite a senha novamente"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="pl-11 h-12 bg-gray-50 border-gray-200"
                required
              />
            </div>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, terms: checked as boolean })
              }
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
              Li e aceito os{' '}
              <span className="text-[#1B5E3F] underline">Termos de Uso</span> e a{' '}
              <span className="text-[#1B5E3F] underline">Política de Privacidade</span>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1B5E3F] hover:bg-[#1B5E3F]/90 h-12"
            disabled={!formData.terms}
          >
            Criar Conta
          </Button>
        </form>
      </div>
    </div>
  );
}
