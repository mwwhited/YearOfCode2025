import { Toast as PrimeToast } from 'primereact/toast';
import { forwardRef } from 'react';
import type { ToastProps as PrimeToastProps } from 'primereact/toast';

interface ToastProps extends Omit<PrimeToastProps, 'ref'> {}

export const Toast = forwardRef<PrimeToast, ToastProps>((props, ref) => {
  return <PrimeToast ref={ref} {...props} />;
});

Toast.displayName = 'Toast';