import { useQuery } from '@tanstack/react-query';
import { UsersOverviewResponse } from '../types/userTypes';
import { fetchUsersOverview } from '../services/fetchUsersOverview';

export function useUsersOverview() {
  const {
    isLoading,
    data: usersOverview,
    error,
  } = useQuery<UsersOverviewResponse, Error>({
    queryKey: ['usersOverview'],
    queryFn: fetchUsersOverview,
  });

  return { isLoading, usersOverview, error };
}
