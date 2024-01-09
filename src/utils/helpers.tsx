import { IUserData } from '@/types/data-table';
import { faker } from '@faker-js/faker';
import {
  maritalStatus,
  nigerianBanks,
  relationships,
  statuses,
} from './models';

export const generateData = (): IUserData[] => {
  const generatedData: IUserData[] = [];

  for (let i = 1; i <= 500; i++) {
    const record: IUserData = {
      id: i,
      organisation: faker.company.name().substring(0, 8),
      username: faker.internet.userName().substring(0, 8).toLowerCase(),
      email: faker.internet.email().substring(0, 8).toLowerCase(),
      phone: faker.phone.number().substring(0, 11),
      start_date: faker.date.past(),
      status: faker.helpers.arrayElement(statuses) as
        | 'active'
        | 'inactive'
        | 'pending'
        | 'blacklisted',
      fullname: faker.internet.displayName(),
      bvn: faker.finance.accountNumber(),
      gender: faker.helpers.arrayElement(['male', 'female', 'unknown']),
      marital_status: faker.helpers.arrayElement(maritalStatus) as
        | 'single'
        | 'married'
        | 'divorced',
      children: faker.number.int({ min: 0, max: 5 }),
      type_of_residence: faker.helpers.arrayElement([
        "Parent's apartment",
        'Personal Apartment',
      ]),
      level_of_education: faker.helpers.arrayElement([
        'High School',
        "Bachelor's Degree",
        "Master's Degree",
      ]),
      employment_status: faker.helpers.arrayElement(['Employed', 'Unemployed']),
      duration_of_employment: faker.helpers.arrayElement([
        '1 year',
        '2 years',
        '3 years',
      ]),
      monthly_income: faker.finance.amount(),
      loan_repayment: faker.finance.amount(),
      twitter: faker.internet.userName().substring(0, 8).toLowerCase(),
      facebook: faker.internet.userName().substring(0, 8),
      instagram: faker.internet.userName().substring(0, 8),
      gurarantors_fullname: faker.internet.displayName().substring(0, 8),
      gurarantors_phone_number: faker.phone.number().substring(0, 8),
      gurarantors_email_address: faker.internet
        .email()
        .substring(0, 8)
        .toLowerCase(),
      gurarantors_relationship: faker.helpers.arrayElement(relationships),
      avatar: faker.image.avatar(),
      withLoan: faker.datatype.boolean(),
      withSavings: faker.datatype.boolean(),
      tier: faker.number.int({ min: 0, max: 5 }),
      account_number: faker.finance
        .accountNumber()
        .substring(0, 10)
        .toLowerCase(),
      bank_name: faker.helpers.arrayElement(nigerianBanks),
    };

    generatedData.push(record);
  }
  return generatedData;
};
