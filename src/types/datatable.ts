export interface IUserData {
  id: string;
  organisation: string;
  username: string;
  email: string;
  phone: string;
  date: string | Date;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
}
