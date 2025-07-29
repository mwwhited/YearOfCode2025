/**
 * InputTextarea Control - Wrapped PrimeReact InputTextarea
 */

import React from 'react';
import { InputTextarea as PrimeInputTextarea } from 'primereact/inputtextarea';
import type { InputTextareaProps as PrimeInputTextareaProps } from 'primereact/inputtextarea';

interface InputTextareaProps extends PrimeInputTextareaProps {
  // Add any custom props here
}

export const InputTextarea: React.FC<InputTextareaProps> = (props) => {
  return <PrimeInputTextarea {...props} />;
};