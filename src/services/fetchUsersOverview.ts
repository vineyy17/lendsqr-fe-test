import { UsersOverview } from '../types/userTypes';

export const fetchUsersOverview = async (): Promise<UsersOverview> => {
  const response = await fetch(
    'https://run.mocky.io/v3/026512b8-b28e-4c6c-b523-d650c9207ffc',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users overview');
  }
  const data = await response.json();
  return data;
};
