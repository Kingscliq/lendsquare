export interface IUserData {
  id: number;
  organisation: string;
  username: string;
  email: string;
  phone: string;
  start_date: string | Date;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
  [key: string]: string | number | Date;
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
  gurarantors_fullname: string
  gurarantors_phone_number: string
  gurarantors_email_address: string
  gurarantors_relationship: string
  avatar: string
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

// data: [
//   { label: 'Full Name', value: '' },
//   { label: 'Phone Number', value: '' },
//   { label: 'Email Address', value: '' },
//   { label: 'BVN', value: '' },
//   { label: 'Gender', value: '' },
//   { label: 'Marital Status', value: '' },
//   { label: 'Children', value: '' },
//   { label: 'Type of Residence', value: '' },
// ],
// },
// {
// id: 2,
// heading: 'Education and Employment',
// data: [
//   { label: 'Level of education', value: '' },
//   { label: 'Employment status', value: '' },
//   { label: 'Sector of employment', value: '' },
//   { label: 'Duration of employment', value: '' },
//   { label: 'Office email', value: '' },
//   { label: ' Monthly income', value: '' },
//   { label: 'loan repayment', value: '' },
//   { label: 'Type of Residence', value: '' },
// ],
// },
// {
// id: 3,
// heading: 'Socials',
// data: [
//   { label: 'Twitter', value: '' },
//   { label: 'Facebook', value: '' },
//   { label: 'Instagram', value: '' },
// ],
// },
// {
// id: 3,
// heading: 'Guarantors',
// data: [
//   { label: 'Full Name', value: '' },
//   { label: 'Phone Number', value: '' },
//   { label: 'Email Address', value: '' },
//   { label: 'Relationship', value: '' },
// ],
// },
