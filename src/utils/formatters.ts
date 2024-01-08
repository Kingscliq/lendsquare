import moment from 'moment';

// Format Date Time
export const getDateTime = (val: string | number) =>
  `${moment(val).format('DD/MM/YYYY')} | ${moment(val).format('hh:mm a')}`;
export const getDayMonth = (val: string | number) =>
  `${moment(val).format('MMMM/DD')}`;
