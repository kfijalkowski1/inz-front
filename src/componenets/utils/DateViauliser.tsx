// Component shows calendar svg with date as a string
import CalendarIcon from "./icons/CalendarIcon.tsx";

export function DateVisualiser(props: {date: string, full: boolean | undefined}) {
  if (!props.date) {
    return "";
  }
  let dateObj: Date = new Date(props.date);
  let dateStr: string
  if (props.full) {
    const split = dateObj.toISOString().split('T');
    dateStr = split[0] + " " + split[1].split('.')[0];
  } else {
    dateStr = dateObj.toISOString().split('T')[0];
  }

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