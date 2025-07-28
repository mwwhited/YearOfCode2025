import React from 'react';
import { Button as PrimeButton } from 'primereact/button';
import { useLocation } from 'react-router-dom';
import { appInsights } from '@/lib/appInsights'; // your setup

const Button = ({ label, action, id, eventName = 'ButtonClick', onClick, ...props }) => {
  const location = useLocation();
  const page = location.pathname.replace(/^\/+|\/+$/g, '').split('/').join('-') || 'home';

  const inferredAction = action || label || 'click';
  const computedLabel = `${page}-${inferredAction}`.toLowerCase().replace(/\s+/g, '-');
  const computedId = id || `btn-${computedLabel}`;

  const handleClick = (e) => {
    appInsights.trackEvent({
      name: eventName,
      properties: {
        id: computedId,
        label: computedLabel,
        page,
        action: inferredAction
      }
    });
    if (onClick) onClick(e);
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