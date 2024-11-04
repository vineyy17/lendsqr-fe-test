import { UsersOverview } from '../types/userTypes';

export const fetchUsersOverview = async (): Promise<UsersOverview> => {
  const response = await fetch(
    'https://run.mocky.io/v3/0c763a22-d589-4ffe-818e-ddbc88a197a9',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users overview');
  }
  const data = await response.json();
  return data;
};
