import moment from 'moment'

// Format Date Time
export const getDateTime = (val: string | number) => `${moment(val).format('DD/MM/YYYY')} | ${moment(val).format('hh:mm a')}`;
export const shorten = (str: string) => `${str.slice(0, 5)}...${str.slice(str.length - 4)}`
