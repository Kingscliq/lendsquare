export interface IUserData {
  id: number;
  organisation: string;
  username: string;
  email: string;
  phone: string;
  start_date: string | Date;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
}
