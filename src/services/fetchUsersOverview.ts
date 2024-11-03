import { UsersOverviewResponse } from '../types/userTypes';

export const fetchUsersOverview = async (): Promise<UsersOverviewResponse> => {
  const response = await fetch(
    'https://run.mocky.io/v3/f56759a3-0d3f-481b-8f2c-ee6b63e09661',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users overview');
  }
  const data = await response.json();
  return data;
};
