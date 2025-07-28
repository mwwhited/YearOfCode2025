import React from 'react';
import { Button as PrimeButton } from 'primereact/button';
import type {  ButtonProps } from 'primereact/button';
import { useLocation } from 'react-router-dom';
import { applicationInsights } from '@/services/applicationInsights'; // your initialized AI instance

// Extend PrimeReact's ButtonProps with telemetry-related props
interface TrackedButtonProps extends ButtonProps {
  action?: string;
  eventName?: string;
  disableTracking?: boolean;
}

const Button: React.FC<TrackedButtonProps> = ({
  label,
  action,
  id,
  eventName = 'ButtonClick',
  onClick,
  disableTracking = false,
  ...props
}) => {
  const location = useLocation();
  const page = location.pathname.replace(/^\/+|\/+$/g, '').split('/').join('-') || 'home';
  const inferredAction = action || (typeof label === 'string' ? label : 'click');
  const computedLabel = `${page}-${inferredAction}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
  const computedId = id || `btn-${computedLabel}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disableTracking) {
      applicationInsights.trackEvent(eventName, {
          id: computedId,
          label: computedLabel,
          page,
          action: inferredAction,
      });
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <PrimeButton
      id={computedId}
      label={label}
      onClick={handleClick}
      {...props}
    />
  );
};

export default Button;
