import React, { useState } from 'react';
import { Card, Button, ProgressBar } from './UI';
import { Question, Option, UserAnswers } from '../types';
import { QUESTIONS, CATEGORY_ICONS } from '../constants';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface QuizProps {
  onComplete: (answers: UserAnswers) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');

  const currentQuestion = QUESTIONS[currentStep];
  const Icon = CATEGORY_ICONS[currentQuestion.category];

  const handleOptionSelect = (option: Option) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: option }));
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setDirection('forward');
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection('back');
      setCurrentStep(prev => prev - 1);
    }
  };

  const isAnswered = !!answers[currentQuestion.id];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
          <span>Progreso</span>
          <span>{currentStep + 1} / {QUESTIONS.length}</span>
        </div>
        <ProgressBar current={currentStep + 1} total={QUESTIONS.length} />
      </div>

      <Card className="min-h-[400px] flex flex-col animate-fade-in relative overflow-hidden">
        {/* Category Badge */}
        <div className="absolute top-0 left-0 w-1 h-full bg-nn-orange"></div>
        
        <div className="mb-6 flex items-center gap-3 text-nn-teal">
          <Icon className="w-6 h-6" />
          <span className="font-semibold text-sm uppercase tracking-wide">
            {currentQuestion.category === 'finance' ? 'Capacidad ante Imprevistos' :
             currentQuestion.category === 'health' ? 'Salud y Movilidad' :
             currentQuestion.category === 'home' ? 'Seguridad en el Hogar' :
             currentQuestion.category === 'support' ? 'Red de Apoyo' : 'Cobertura'}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-nn-black mb-8 leading-tight">
          {currentQuestion.question}
        </h2>

        <div className="flex flex-col gap-3 flex-grow">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option)}
              className={`
                text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between group
                ${answers[currentQuestion.id]?.id === option.id 
                  ? 'border-nn-orange bg-orange-50 text-nn-black shadow-sm' 
                  : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50 text-gray-700'}
              `}
            >
              <span className="font-medium pr-4">{option.text}</span>
              {answers[currentQuestion.id]?.id === option.id && (
                <CheckCircle2 className="w-6 h-6 text-nn-orange flex-shrink-0" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100">
          <Button 
            variant="ghost" 
            onClick={handleBack} 
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Anterior
          </Button>
          
          <Button 
            variant="primary" 
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex items-center gap-2"
          >
            {currentStep === QUESTIONS.length - 1 ? 'Ver Resultados' : 'Siguiente'} 
            {currentStep !== QUESTIONS.length - 1 && <ArrowRight className="w-4 h-4" />}
          </Button>
        </div>
      </Card>
    </div>
  );
};
