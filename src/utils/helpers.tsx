// utils/generateData.ts

import { IUserData } from '@/types/datatable';
import * as faker from 'faker';

const randomDate = (start: Date, end: Date): Date =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const generateData = (): IUserData[] => {
  const generatedData: IUserData[] = [];

  for (let i = 1; i <= 500; i++) {
    const dataRecord: IUserData = {
      id: i,
      organisation: faker.company.companyName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      start_date: randomDate(new Date(2010, 0, 1), new Date()),
      status: faker.random.arrayElement(['active', 'inactive', '', '', '']),
    };

    generatedData.push(dataRecord);
  }

  return generatedData;
};
