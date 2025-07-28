import React, { createContext, useContext, useState, useCallback } from 'react';
import { correlationManager } from '@/utils/correlationManager';

interface UserActionData {
  id: string;
  label: string;
  page: string;
  action: string;
  eventName: string;
}

interface CorrelationContextType {
  correlationId: string | null;
  userAction: UserActionData | null;
  startUserAction: (actionData: UserActionData) => void;
  clearUserAction: () => void;
  generateNewCorrelationId: () => string;
}

const CorrelationContext = createContext<CorrelationContextType | undefined>(undefined);

export const CorrelationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [correlationId, setCorrelationId] = useState<string | null>(null);
  const [userAction, setUserAction] = useState<UserActionData | null>(null);

  const startUserAction = useCallback((actionData: UserActionData) => {
    const newCorrelationId = correlationManager.startUserAction(actionData);
    setCorrelationId(newCorrelationId);
    setUserAction(actionData);
  }, []);

  const clearUserAction = useCallback(() => {
    correlationManager.clearUserAction();
    setCorrelationId(null);
    setUserAction(null);
  }, []);

  const generateNewCorrelationId = useCallback(() => {
    const newId = correlationManager.generateNewCorrelationId();
    setCorrelationId(newId);
    return newId;
  }, []);

  const value: CorrelationContextType = {
    correlationId,
    userAction,
    startUserAction,
    clearUserAction,
    generateNewCorrelationId,
  };

  return (
    <CorrelationContext.Provider value={value}>
      {children}
    </CorrelationContext.Provider>
  );
};

export const useCorrelation = (): CorrelationContextType => {
  const context = useContext(CorrelationContext);
  if (!context) {
    throw new Error('useCorrelation must be used within a CorrelationProvider');
  }
  return context;
};