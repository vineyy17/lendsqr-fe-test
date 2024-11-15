import { UsersOverview } from '../types/userTypes';

export const fetchUsersOverview = async (): Promise<UsersOverview> => {
  const response = await fetch(
    'https://run.mocky.io/v3/5e0a23b9-0ee0-4acd-af7d-7705c7c3a230',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users overview');
  }
  const data = await response.json();
  return data;
};
