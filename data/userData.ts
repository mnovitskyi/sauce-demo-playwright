export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserData {
  credentials: UserCredentials;  
  firstName: string;
  lastName: string;
  zipCode: string;
}

export const standardUser: UserCredentials = {
  username: process.env.USERNAME_STANDARD || "",
  password: process.env.PASSWORD || "",
};

export const wrongUser: UserCredentials = {
  username: 'wrong_username',
  password: 'wrong_password',
};
