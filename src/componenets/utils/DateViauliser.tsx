// Component shows calendar svg with date as a string
import CalendarIcon from "./icons/CalendarIcon.tsx";

export function DateVisualiser({date}: {date: string}) {
  if (!date) {
    return "";
  }
  let dateObj: Date = new Date(date);
  const dateStr: string = dateObj.toISOString().split('T')[0];
  return (
    <div className={"flex items-center"}>
      <CalendarIcon />
      <p className={"text-sm text-gray-800 dark:text-gray-400"}>
        {dateStr}
      </p>
    </div>
  );
}

export default DateVisualiser;