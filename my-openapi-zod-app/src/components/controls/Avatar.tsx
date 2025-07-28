import { Avatar as PrimeAvatar } from 'primereact/avatar';
import type { AvatarProps as PrimeAvatarProps } from 'primereact/avatar';

export interface AvatarProps extends PrimeAvatarProps {
  // Add custom props if needed
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <PrimeAvatar {...props} />;
};