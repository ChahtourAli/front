// import moment from 'moment';
// import { timeSlotToTime } from './timeSlotToTime';

// export const formatDateToBackEnd = date => {
//   if (moment.isMoment(date)) {
//     const formattedMonth =
//       date.month() + 1 < 10 ? `0${date.month() + 1}` : date.month() + 1;
//     const formattedDate = date.date() < 10 ? `0${date.date()}` : date.date();
//     const year = date.year();

//     return `${year}-${formattedMonth}-${formattedDate}`;
//   }
//   const formattedMonth =
//     date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
//   const formattedDate =
//     date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
//   const year = date.getFullYear();

//   return `${year}-${formattedMonth}-${formattedDate}`;
// };

// export const formatDateFromBackEnd = (date, timeSlot) => {
//   const { to24Hours, from24Hours, toMinutes, fromMinutes } = timeSlotToTime(
//     timeSlot,
//   );
//   const endTimeStamp = new Date(date).setHours(to24Hours, toMinutes, 0, 0);
//   const startTimeStamp = new Date(date).setHours(
//     from24Hours,
//     fromMinutes,
//     0,
//     0,
//   );

//   return { endTimeStamp, startTimeStamp };
// };
// export const createTimeSlotForBackEnd = (to, from) => ({
//   to: getSecondsFromhmma(to),
//   from: getSecondsFromhmma(from),
// });

// const getSecondsFromhmma = time => {
//   const momentTime = moment(time, 'h:mma');

//   return momentTime.minutes() * 60 + momentTime.hours() * 3600;
// };
