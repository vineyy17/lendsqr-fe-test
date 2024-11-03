import { useQuery } from '@tanstack/react-query';
import { fetchUsersOverview } from '../services/fetchUsersOverview';
import { UsersOverview } from '../types/userTypes';

export function useUsersOverview() {
  const {
    isLoading,
    data: usersOverview,
    error,
  } = useQuery<UsersOverview, Error>({
    queryKey: ['usersOverview'],
    queryFn: fetchUsersOverview,
  });

  return { isLoading, usersOverview, error };
}
