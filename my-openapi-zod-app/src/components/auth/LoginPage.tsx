import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useAuth } from '../../hooks/useAuth';

export const LoginPage: React.FC = () => {
  const { login, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/dashboard';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <ProgressSpinner />
      </div>
    );
  }

  if (isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex align-items-center justify-content-center px-4" 
         style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Card className="w-full max-w-md">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-primary mb-2">GreenOnion</h1>
          <p className="text-600">Sign in to your account</p>
        </div>

        <div className="mb-4">
          <Message 
            severity="info" 
            text="Click the button below to sign in with Azure B2C" 
            className="w-full"
          />
        </div>

        <Button
          label="Sign In with Azure B2C"
          icon="pi pi-microsoft"
          className="w-full p-3 text-lg"
          onClick={handleLogin}
          loading={isLoading}
        />

        <div className="mt-4 text-center">
          <small className="text-600">
            Secure authentication powered by Microsoft Azure B2C
          </small>
        </div>
      </Card>
    </div>
  );
};