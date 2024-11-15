import { User } from '../types/userTypes';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(
    'https://run.mocky.io/v3/698250a8-d7ff-4c12-95fd-52c78cdc9528',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data;
};
