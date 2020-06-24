export const currentDateAndTime = (today = new Date()) => {
  const day = today.toString().slice(0, 3);

  const date = `${today.getMonth() +
    1}/${today.getDate()}/${today.getFullYear()}`;

  const { time, ampm } = formatTimeToAMPM(today);

  let seconds = today.getSeconds().toString();

  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }
  const daysSeconds =
    today.getMinutes() * 60 + today.getHours() * 3600 + today.getSeconds();

  return { day, date, time, seconds, ampm, daysSeconds };
};

const formatTimeToAMPM = today => {
  let hours = today.getHours();

  let minutes = today.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes}`;

  return { time: strTime, ampm };
};
