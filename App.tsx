import React, { useState } from 'react';
import { Header } from './components/Header';
import { Quiz } from './components/Quiz';
import { EmailGate } from './components/EmailGate';
import { ResultsView } from './components/ResultsView';
import { Button } from './components/UI';
import { UserAnswers, UserProfile } from './types';
import { ArrowRight, Shield, HeartHandshake, TrendingUp } from 'lucide-react';

type AppState = 'intro' | 'quiz' | 'gate' | 'results';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>('intro');
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleStart = () => {
    setView('quiz');
    window.scrollTo(0, 0);
  };

  const handleQuizComplete = (completedAnswers: UserAnswers) => {
    setAnswers(completedAnswers);
    setView('gate');
    window.scrollTo(0, 0);
  };

  const handleGateSubmit = (profile: UserProfile) => {
    setUserProfile(profile);
    setView('results');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      
      <main className="flex-grow flex flex-col">
        {view === 'intro' && (
          <div className="flex-grow flex flex-col items-center justify-center px-6 py-12 md:py-20 animate-fade-in">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-nn-orange font-semibold text-sm mb-6 tracking-wide">
                HERRAMIENTA DE DIAGNÓSTICO GRATUITA
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-nn-black mb-6 leading-[1.1] tracking-tight">
                ¿Estás realmente protegido para los próximos 20 años?
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                El 70% de los profesionales mayores de 55 años tienen brechas en su cobertura que podrían afectar su autonomía. Descubre tu "Índice de Autonomía" en 3 minutos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left max-w-4xl mx-auto">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <Shield className="w-8 h-8 text-nn-orange mb-4" />
                  <h3 className="font-bold text-nn-black mb-2">Auditoría de Riesgos</h3>
                  <p className="text-sm text-gray-600">Evalúa tu exposición a accidentes y gastos médicos imprevistos.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <TrendingUp className="w-8 h-8 text-nn-orange mb-4" />
                  <h3 className="font-bold text-nn-black mb-2">Impacto Financiero</h3>
                  <p className="text-sm text-gray-600">Calcula si tus ahorros actuales resistirían una situación de dependencia.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <HeartHandshake className="w-8 h-8 text-nn-orange mb-4" />
                  <h3 className="font-bold text-nn-black mb-2">Plan Personalizado</h3>
                  <p className="text-sm text-gray-600">Recibe una hoja de ruta para mantener tu independencia sin ser una carga.</p>
                </div>
              </div>

              <Button onClick={handleStart} className="text-lg px-10 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Comenzar Evaluación <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
              <p className="mt-4 text-xs text-gray-400">15 Preguntas • 100% Confidencial • Análisis Inmediato</p>
            </div>
          </div>
        )}

        {view === 'quiz' && (
          <Quiz onComplete={handleQuizComplete} />
        )}

        {view === 'gate' && (
          <EmailGate onSubmit={handleGateSubmit} />
        )}

        {view === 'results' && userProfile && (
          <ResultsView answers={answers} user={userProfile} />
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <div className="font-bold text-xl tracking-tight mb-1">Contigo Senior</div>
             <div className="text-sm text-gray-400">Una solución de Nationale-Nederlanden</div>
          </div>
          <div className="text-xs text-gray-500 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Nationale-Nederlanden.</p>
            <p className="mt-1">Todos los derechos reservados. Política de Privacidad | Términos de Uso</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;