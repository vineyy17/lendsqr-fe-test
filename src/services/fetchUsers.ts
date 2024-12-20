import { User } from '../types/userTypes';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(
    'https://run.mocky.io/v3/3d748058-5435-42f1-b168-4c7c998c4834',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data;
};
