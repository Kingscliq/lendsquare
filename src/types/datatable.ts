import { SetStateAction } from 'react';

export interface IUserData {
  id: number;
  organisation: string;
  username: string;
  email: string;
  phone: string;
  start_date: string | Date;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
  fullname: string;
  bvn: string;
  gender: 'male' | 'female' | 'unknown';
  marital_status: 'single' | 'married' | 'divorced';
  children: number;
  type_of_residence: string; // Parent's apartment | Personal Apartment
  level_of_education: string;
  employment_status: string;
  duration_of_employment: string;
  monthly_income: string;
  loan_repayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  gurarantors_fullname: string;
  gurarantors_phone_number: string;
  gurarantors_email_address: string;
  gurarantors_relationship: string;
  avatar: string;
  withLoan: boolean;
  withSavings: boolean;
  account_number: string;
  tier: number;
  bank_name: string;
  [key: string]: string | number | Date | boolean;
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

export type FilterTypes = {
  filters: FilterQuery;
  setFilter: (payload: UserFilterType) => void;
  resetFilter: () => void;
  searchFilter: (search: string) => void;
  getSingleUsers: (id: number) => IUserData | undefined;
  filteredData: IUserData[];
  activeUsers: number;
  usersWithLoan: number;
  usersWithSavings: number;
  filtersModal: boolean;
  setQuery: React.Dispatch<SetStateAction<FilterQuery>>;
  setFilterModal: React.Dispatch<SetStateAction<boolean>>;
};
