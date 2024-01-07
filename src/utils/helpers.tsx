import { IUserData } from '@/types/dataTable';
import { faker } from '@faker-js/faker';

export const generateData = (): IUserData[] => {
  const generatedData: IUserData[] = [];
  const relationships = [
    'brother',
    'sister',
    'father',
    'uncle',
    'aunty',
    'cousin',
    'friend',
    'colleague',
  ];

  for (let i = 1; i <= 500; i++) {
    const record: IUserData = {
      id: i,
      organisation: faker.company.name(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      start_date: faker.date.past(),
      status: faker.helpers.arrayElement([
        'active',
        'inactive',
        'pending',
        'blacklisted',
      ]),
      fullname: faker.internet.displayName(),
      bvn: faker.finance.accountNumber(),
      gender: faker.helpers.arrayElement(['male', 'female', 'unknown']),
      marital_status: faker.helpers.arrayElement([
        'single',
        'married',
        'divorced',
      ]),
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
      twitter: faker.internet.userName(),
      facebook: faker.internet.userName(),
      instagram: faker.internet.userName(),
      gurarantors_fullname: faker.internet.displayName(),
      gurarantors_phone_number: faker.phone.number(),
      gurarantors_email_address: faker.internet.email(),
      gurarantors_relationship: faker.helpers.arrayElement(relationships),
      avatar: faker.image.avatar(),
      withLoan: faker.datatype.boolean(),
      withSavings: faker.datatype.boolean(),
    };

    generatedData.push(record);
  }
  return generatedData;
};
