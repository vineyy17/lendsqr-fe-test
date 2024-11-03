import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/fetchUsers';
import { UsersResponse } from '../types/userTypes';

export function useUsers() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery<UsersResponse, Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  return { isLoading, users, error };
}
