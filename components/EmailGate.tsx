import React, { useState } from 'react';
import { Card, Button, Input } from './UI';
import { Lock, FileCheck } from 'lucide-react';
import { UserProfile } from '../types';

interface EmailGateProps {
  onSubmit: (data: UserProfile) => void;
}

export const EmailGate: React.FC<EmailGateProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserProfile>({
    name: '',
    email: '',
    age: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network delay for effect
    setTimeout(() => {
      onSubmit(formData);
    }, 800);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-12">
      <Card className="text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="w-8 h-8 text-nn-orange" />
        </div>
        
        <h2 className="text-2xl font-bold text-nn-black mb-2">
          Tu análisis está listo
        </h2>
        <p className="text-gray-600 mb-8">
          Hemos calculado tu <span className="font-bold text-nn-black">Índice de Autonomía Senior</span>. 
          Introduce tus datos para desbloquear tu informe personalizado y recibir recomendaciones de expertos.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <Input 
            label="Nombre" 
            placeholder="Ej. Juan Pérez"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <Input 
            label="Correo Electrónico" 
            type="email" 
            placeholder="juan@ejemplo.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <Input 
            label="Edad" 
            type="number" 
            placeholder="Ej. 62"
            min="50"
            max="90"
            required
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
          />
          
          <div className="mt-4">
            <Button 
              type="submit" 
              fullWidth 
              variant="primary"
              disabled={isLoading}
              className="flex justify-center items-center gap-2"
            >
              {isLoading ? 'Procesando...' : (
                <>
                  <FileCheck className="w-5 h-5" />
                  Ver Mi Informe Completo
                </>
              )}
            </Button>
          </div>
          
          <p className="text-xs text-center text-gray-400 mt-4">
            Tus datos están protegidos. Respetamos tu privacidad y no compartiremos tu información con terceros sin consentimiento.
          </p>
        </form>
      </Card>
    </div>
  );
};
