import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-nn-orange text-white hover:bg-orange-600 focus:ring-nn-orange shadow-md",
    secondary: "bg-nn-black text-white hover:bg-gray-800 focus:ring-gray-800",
    outline: "border-2 border-nn-orange text-nn-orange hover:bg-orange-50 focus:ring-nn-orange",
    ghost: "text-nn-darkGrey hover:bg-gray-100 hover:text-nn-orange",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

export const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const percentage = Math.min((current / total) * 100, 100);
  
  return (
    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
      <div 
        className="bg-nn-orange h-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-nn-darkGrey uppercase tracking-wide">
      {label}
    </label>
    <input 
      className={`border border-gray-300 rounded-md p-3 text-lg focus:border-nn-orange focus:ring-1 focus:ring-nn-orange outline-none transition-colors ${className}`}
      {...props}
    />
  </div>
);
