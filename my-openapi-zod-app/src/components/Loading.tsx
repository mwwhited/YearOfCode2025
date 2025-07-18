import React from 'react';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

const Loading: React.FC<LoadingProps> = ({ 
  message = 'Loading...', 
  size = 'medium' 
}) => {
  const sizeClasses = {
    small: 'w-5 h-5',
    medium: 'w-10 h-10',
    large: 'w-15 h-15'
  };

  return (
    <div className="flex flex-col items-center gap-2.5 p-5">
      <div
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}
      />
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

export default Loading;
