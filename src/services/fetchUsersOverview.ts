import { UsersOverview } from '../types/userTypes';

export const fetchUsersOverview = async (): Promise<UsersOverview> => {
  const response = await fetch(
    'https://run.mocky.io/v3/da477313-5000-4528-8240-e9be6b110c41',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users overview');
  }
  const data = await response.json();
  return data;
};
