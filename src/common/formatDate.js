export default (dayOfMonth, dayOfWeek, monthName, year) =>
  [dayOfWeek, `${monthName} ${dayOfMonth}`, year].join(", ");
