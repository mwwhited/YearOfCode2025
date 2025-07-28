import { Card as PrimeCard } from 'primereact/card';
import type { CardProps as PrimeCardProps } from 'primereact/card';

export interface CardProps extends PrimeCardProps {
  // Add custom props if needed
}

export const Card: React.FC<CardProps> = (props) => {
  return <PrimeCard {...props} />;
};