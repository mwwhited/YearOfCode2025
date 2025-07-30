import React, { createContext, useContext, useRef } from 'react';
import { Toast } from 'primereact/toast';
import type { ToastMessage } from '@/hooks/useToast';

interface ToastContextType {
  show: (message: ToastMessage) => void;
  showSuccess: (summary: string, detail?: string, life?: number) => void;
  showError: (summary: string, detail?: string, life?: number) => void;
  showInfo: (summary: string, detail?: string, life?: number) => void;
  showWarn: (summary: string, detail?: string, life?: number) => void;
  clear: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useGlobalToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useGlobalToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const toast = useRef<Toast>(null);

  const show = (message: ToastMessage) => {
    toast.current?.show({
      severity: message.severity || 'info',
      summary: message.summary || '',
      detail: message.detail || '',
      life: message.life || 3000,
      sticky: message.sticky || false,
      closable: message.closable !== false
    });
  };

  const showSuccess = (summary: string, detail?: string, life?: number) => {
    show({
      severity: 'success',
      summary,
      detail,
      life
    });
  };

  const showError = (summary: string, detail?: string, life?: number) => {
    show({
      severity: 'error',
      summary,
      detail,
      life: life || 5000
    });
  };

  const showInfo = (summary: string, detail?: string, life?: number) => {
    show({
      severity: 'info',
      summary,
      detail,
      life
    });
  };

  const showWarn = (summary: string, detail?: string, life?: number) => {
    show({
      severity: 'warn',
      summary,
      detail,
      life
    });
  };

  const clear = () => {
    toast.current?.clear();
  };

  const value: ToastContextType = {
    show,
    showSuccess,
    showError,
    showInfo,
    showWarn,
    clear
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast ref={toast} position="top-right" />
    </ToastContext.Provider>
  );
};