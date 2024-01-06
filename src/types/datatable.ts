export interface IUserData {
  id: number;
  organisation: string;
  username: string;
  email: string;
  phone: string;
  start_date: string | Date;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
}

export interface FilterQuery {
  organisation: string;
  username: string;
  email: string;
  date: string;
  phone_number: string;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted' | '';
  search_string: string;
}


export type UserFilterType = {
  field: keyof FilterQuery;
  value: string | number;
};