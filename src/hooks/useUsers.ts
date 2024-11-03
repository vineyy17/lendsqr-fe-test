import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/fetchUsers';
import { User } from '../types/userTypes';

export function useUsers() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  return { isLoading, users, error };
}
