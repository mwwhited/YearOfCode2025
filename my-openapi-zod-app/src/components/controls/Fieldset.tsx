/**
 * Fieldset Control - Wrapped PrimeReact Fieldset
 */

import React from 'react';
import { Fieldset as PrimeFieldset } from 'primereact/fieldset';
import type { FieldsetProps as PrimeFieldsetProps } from 'primereact/fieldset';

interface FieldsetProps extends PrimeFieldsetProps {
  // Add any custom props here
}

export const Fieldset: React.FC<FieldsetProps> = (props) => {
  return <PrimeFieldset {...props} />;
};