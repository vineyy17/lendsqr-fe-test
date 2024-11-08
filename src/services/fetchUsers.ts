import { User } from '../types/userTypes';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(
    'https://run.mocky.io/v3/369cb0d0-82a6-4d9e-ba15-59524eaeb4e5',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data;
};
