import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Stylized N Logo Representation */}
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#FF7A00] to-[#FF9E44] flex items-center justify-center text-white font-bold text-xl font-serif">
            N
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-nn-black tracking-tight text-lg">Contigo Senior</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">By Nationale-Nederlanden</span>
          </div>
        </div>
        <div className="hidden md:block text-sm font-medium text-nn-orange">
          Quiz: Análisis de Autonomía
        </div>
      </div>
    </header>
  );
};