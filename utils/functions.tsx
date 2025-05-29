export default function getFullDate(time: number, isLog?: boolean) {
  const date = new Date(time);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const fullYear = `${year}/${month}/${day}`;

  let log = '';
  let hour = date.getHours();

  if (isLog) {
    log = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // el '0' debe ser '12'
  }

  let hours = String(hour).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const fullTime = `${hours}:${minutes} ${log}`;

  return [fullYear, fullTime];
}