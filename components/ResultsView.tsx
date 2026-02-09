import React from 'react';
import { UserAnswers, UserProfile, CategoryScore } from '../types';
import { QUESTIONS, CATEGORY_LABELS } from '../constants';
import { Card, Button } from './UI';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis 
} from 'recharts';
import { Download, Phone, ShieldCheck, AlertTriangle, Check } from 'lucide-react';

interface ResultsViewProps {
  answers: UserAnswers;
  user: UserProfile;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ answers, user }) => {
  // Calculate Scores
  const calculateScores = (): CategoryScore[] => {
    const scores: Record<string, { total: number; max: number }> = {};
    
    // Initialize
    Object.keys(CATEGORY_LABELS).forEach(cat => {
      scores[cat] = { total: 0, max: 0 };
    });

    QUESTIONS.forEach(q => {
      if (answers[q.id]) {
        scores[q.category].total += answers[q.id].score;
        scores[q.category].max += 10; // Max score per question is 10
      }
    });

    return Object.entries(scores).map(([cat, val]) => ({
      category: cat as any,
      label: CATEGORY_LABELS[cat],
      score: Math.round((val.total / val.max) * 100),
      maxScore: 100
    }));
  };

  const scores = calculateScores();
  const totalScore = Math.round(scores.reduce((acc, curr) => acc + curr.score, 0) / scores.length);
  
  // Chart Data
  const data = scores.map(s => ({
    subject: s.label.split(' ')[0], // Shorten label for chart
    A: s.score,
    fullMark: 100,
  }));

  // Determine Persona/Status
  let statusColor = 'text-yellow-600';
  let statusTitle = 'Protección Moderada';
  let statusMsg = 'Tienes buenas bases, pero existen brechas importantes en tu autonomía a largo plazo.';

  if (totalScore >= 80) {
    statusColor = 'text-green-600';
    statusTitle = 'Bien Protegido';
    statusMsg = 'Has tomado excelentes decisiones. Solo necesitas optimizar pequeños detalles.';
  } else if (totalScore < 50) {
    statusColor = 'text-red-600';
    statusTitle = 'Riesgo de Autonomía';
    statusMsg = 'Tu situación actual presenta riesgos significativos para tu independencia y finanzas.';
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 animate-fade-in pb-24">
      
      {/* Header Result */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-nn-black mb-2">
          Hola {user.name}, aquí está tu análisis
        </h1>
        <p className="text-lg text-gray-600">
          Hemos detectado un índice de protección del <span className={`font-bold text-2xl ${statusColor}`}>{totalScore}/100</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Chart Section */}
        <Card className="flex flex-col items-center justify-center min-h-[350px]">
          <h3 className="text-lg font-bold text-nn-darkGrey mb-4 self-start">Mapa de Vulnerabilidad</h3>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#e5e5e5" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#333', fontSize: 12, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                <Radar
                  name="Tú"
                  dataKey="A"
                  stroke="#FF7A00"
                  strokeWidth={3}
                  fill="#FF7A00"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-center text-gray-500">
            Comparativa de tus áreas de protección clave.
          </div>
        </Card>

        {/* Diagnosis Section */}
        <Card className="flex flex-col">
          <h3 className="text-lg font-bold text-nn-darkGrey mb-4">Diagnóstico Clave</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-nn-orange mb-6">
            <h4 className={`font-bold ${statusColor} mb-2`}>{statusTitle}</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{statusMsg}</p>
          </div>

          <div className="space-y-4">
            {scores.filter(s => s.score < 60).slice(0, 3).map((risk, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-gray-800 text-sm">{risk.label}:</span>
                  <p className="text-sm text-gray-600">Riesgo detectado. Tu preparación actual es insuficiente para afrontar imprevistos en esta área.</p>
                </div>
              </div>
            ))}
            {scores.filter(s => s.score >= 80).slice(0, 2).map((good, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-gray-800 text-sm">{good.label}:</span>
                  <p className="text-sm text-gray-600">¡Buen trabajo! Tienes una base sólida aquí.</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* The Solution / Pitch */}
      <div className="bg-nn-black text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-nn-orange opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Cierra tus brechas hoy con <span className="text-nn-orange">Contigo Senior</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Diseñado específicamente para tu etapa vital ({user.age} años). Combinamos la protección de accidentes con salud privada integral, eliminando la burocracia y las sorpresas.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <ShieldCheck className="text-nn-orange w-5 h-5" />
                <span>Salud privada (Sanitas) + Accidentes desde 42€/mes.</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="text-nn-orange w-5 h-5" />
                <span>Sin cuestionario médico. Contratación inmediata.</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="text-nn-orange w-5 h-5" />
                <span>Hasta 200h/año de asistencia domiciliaria por accidente.</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">
                Agendar Asesoría Gratuita
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nn-black">
                <Download className="w-4 h-4 mr-2" />
                Descargar Informe PDF
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
             <h3 className="font-bold text-lg mb-4 text-nn-orange">Tu Simulación Estimada</h3>
             <div className="space-y-4">
               <div className="flex justify-between border-b border-white/20 pb-2">
                 <span>Edad</span>
                 <span className="font-mono">{user.age} años</span>
               </div>
               <div className="flex justify-between border-b border-white/20 pb-2">
                 <span>Riesgo Actual</span>
                 <span className="font-mono text-red-300">{100 - totalScore}%</span>
               </div>
               <div className="flex justify-between border-b border-white/20 pb-2">
                 <span>Coste recuperación accidente</span>
                 <span className="font-mono">~1.200€/mes</span>
               </div>
               <div className="pt-2">
                 <div className="text-sm text-gray-400 mb-1">Precio Contigo Senior</div>
                 <div className="text-3xl font-bold text-white">~45€<span className="text-sm font-normal text-gray-400">/mes</span></div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
