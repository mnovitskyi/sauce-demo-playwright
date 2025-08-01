import { faker } from '@faker-js/faker';
import { UserCredentials, UserData } from '../data/userData';

export function generateUserData(credentials?: UserCredentials): UserData {
  const userCredentials: UserCredentials = credentials ?? {
    username: faker.internet.username(),
    password: faker.internet.password(),
  };

  return {
    credentials: userCredentials,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zipCode: faker.location.zipCode(),
  };
}

