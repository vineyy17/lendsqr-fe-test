import { User } from '../types/userTypes';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(
    'https://run.mocky.io/v3/48e1446f-7391-495b-93bb-07d7d7f2ea39',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data;
};
