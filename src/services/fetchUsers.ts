import { User } from '../types/userTypes';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(
    'https://run.mocky.io/v3/aaf962b3-813e-401b-a2c5-dd6a3c17b011',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data;
};
