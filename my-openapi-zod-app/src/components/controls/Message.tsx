import { Message as PrimeMessage } from 'primereact/message';
import type { MessageProps as PrimeMessageProps } from 'primereact/message';

export interface MessageProps extends PrimeMessageProps {
  // Add custom props if needed
}

export const Message: React.FC<MessageProps> = (props) => {
  return <PrimeMessage {...props} />;
};