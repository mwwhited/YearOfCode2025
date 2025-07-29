import { Calendar as PrimeCalendar } from 'primereact/calendar';
import type { CalendarProps as PrimeCalendarProps } from 'primereact/calendar';

interface CalendarProps extends PrimeCalendarProps {
  // Custom props can be added here
}

export const Calendar: React.FC<CalendarProps> = (props) => {
  return <PrimeCalendar {...props} />;
};