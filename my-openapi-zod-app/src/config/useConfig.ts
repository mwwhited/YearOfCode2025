import { useState, useEffect } from 'react';
import { configManager, type AppConfig } from './appConfig';

interface UseConfigReturn {
  config: AppConfig | null;
  isLoading: boolean;
  error: string | null;
  reload: () => Promise<void>;
}

export const useConfig = (): UseConfigReturn => {
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadConfig = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const loadedConfig = await configManager.loadConfig();
      setConfig(loadedConfig);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load configuration';
      setError(errorMessage);
      console.error('Configuration loading error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const reload = async () => {
    await configManager.reloadConfig();
    await loadConfig();
  };

  useEffect(() => {
    loadConfig();
  }, []);

  return {
    config,
    isLoading,
    error,
    reload
  };
};