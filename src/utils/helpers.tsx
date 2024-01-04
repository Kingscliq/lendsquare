// utils/generateData.ts

import faker from 'faker';

interface DataRecord {
  id: number;
  organisation: string;
  username: string;
  email: string;
  phone: string;
  start_date: Date;
  status: string;
}

const randomDate = (start: Date, end: Date): Date =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const generateData = (): DataRecord[] => {
  const generatedData: DataRecord[] = [];

  for (let i = 1; i <= 500; i++) {
    const dataRecord: DataRecord = {
      id: i,
      organisation: faker.company.companyName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      start_date: randomDate(new Date(2010, 0, 1), new Date()),
      status: faker.random.arrayElement(['active', 'inactive']),
    };

    generatedData.push(dataRecord);
  }

  return generatedData;
};
