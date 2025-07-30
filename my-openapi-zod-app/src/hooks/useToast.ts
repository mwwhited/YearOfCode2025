import { useRef } from 'react';
import { Toast } from 'primereact/toast';

export interface ToastMessage {
  severity?: 'success' | 'info' | 'warn' | 'error';
  summary?: string;
  detail?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
}

export function useToast() {
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
      life: life || 5000 // Errors stay longer by default
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

  return {
    toast,
    show,
    showSuccess,
    showError,
    showInfo,
    showWarn,
    clear
  };
}